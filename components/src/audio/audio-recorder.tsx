// Reference
// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
// https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API

import React from 'react';
import classnames from 'classnames';
import { Button } from '../button';
import { useTimer } from '../_hooks/useTimer';
import { formatTime } from '../_utils/functions';
import { AudioVisualizer } from './audio-visualizer';

export interface AudioRecorderProps {
  className?: string;
  classOverride?: string;
  blobEncoding?: string;
  onRecordStart?: () => void;
  onRecordEnd?: ({ blob, url }: { blob: Blob; url: string }) => void;
}

export const AudioRecorder: React.FC<AudioRecorderProps> = ({
  className,
  classOverride,
  blobEncoding = 'audio/ogg; codecs=opus',
  onRecordStart,
  onRecordEnd
}) => {
  const stream = React.useRef<MediaStream>();
  const recorder = React.useRef<MediaRecorder>();
  const data = React.useRef<Blob[]>();
  const [isRecording, setIsRecording] = React.useState(false);
  const [_recording, setRecording] = React.useState<string>();
  const [visualBlob, setVisualBlob] = React.useState<Blob>(new Blob());
  const { time, startTimer, stopTimer, resetTimer } = useTimer({ format: formatTime });

  const onRecord = React.useCallback(async () => {
    data.current = [];
    resetTimer();
    setIsRecording(true);
    stream.current = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorder.current = new MediaRecorder(stream.current);
    recorder.current.onstart = () => {
      startTimer();
      onRecordStart?.();
    };
    recorder.current.ondataavailable = function (e) {
      data.current!.push(e.data);
      // add the first blob to the visualizer to ensure the audio can be decoded
      setVisualBlob(new Blob([data.current![0], e.data], { type: blobEncoding }));
    };
    recorder.current.onstop = function (e) {
      stopTimer();
      const blob = new Blob(data.current, { type: blobEncoding });
      data.current = [];
      const url = URL.createObjectURL(blob);
      setRecording(url);
      onRecordEnd?.({ blob, url });
    };
    recorder.current.start(1000);
  }, [blobEncoding, onRecordEnd, onRecordStart, resetTimer, startTimer, stopTimer]);

  const onStop = async () => {
    if (recorder.current) {
      recorder.current.stop();
      recorder.current = undefined;
    }

    if (stream.current) {
      stream.current.getTracks().forEach((track) => track.stop());
      stream.current = undefined;
    }
    setIsRecording(false);
  };

  const classNames =
    classOverride ??
    classnames('adiago-audio-recorder', 'flex flex-col items-center justify-center space-y-4', className);
  const recordingIconClassNames = classnames(
    'adiago-audio-recorder-icon',
    'w-3 h-3 rounded-full bg-red-500 transition-all duration-75',
    { 'w-3 h-3 rounded-sm bg-neutral-600 dark:bg-neutral-100': isRecording }
  );

  return (
    <div className={classNames}>
      <Button
        variant="flat"
        color={'opaque'}
        shape="circle"
        size="sm"
        icon={<div className={recordingIconClassNames}></div>}
        onClick={isRecording ? onStop : onRecord}
      />
      <p>Duration: {time}</p>
      <AudioVisualizer rawData={visualBlob} />
    </div>
  );
};
