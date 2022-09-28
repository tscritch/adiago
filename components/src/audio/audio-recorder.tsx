import React from 'react';
import classnames from 'classnames';
import { StopIcon } from '@heroicons/react/24/solid';
import { Button } from '../button';

export const AudioRecorder = () => {
  // const stream = React.useRef<MediaStream>();
  // const recorder = React.useRef<MediaRecorder>();
  // const data = React.useRef<Blob[]>();
  // const [isRecording, setIsRecording] = React.useState(false);
  // const [recording, setRecording] = React.useState<string>();

  // const onRecord = async () => {
  //   setIsRecording(true);
  //   stream.current = await navigator.mediaDevices.getUserMedia({ audio: true });
  //   recorder.current = new MediaRecorder(stream.current);
  //   recorder.current.ondataavailable = function (e) {
  //     data.current = [];
  //     data.current.push(e.data);
  //   };
  //   recorder.current.onstop = function (e) {
  //     const blob = new Blob(data.current, { type: 'audio/ogg; codecs=opus' });
  //     data.current = [];
  //     setRecording(window.URL.createObjectURL(blob));
  //   };
  //   recorder.current.start();
  // };

  // const onStop = async () => {
  //   recorder.current!.stop();
  //   stream.current = undefined;
  //   recorder.current = undefined;
  //   setIsRecording(false);
  // };

  const classNames = classnames('adiago-audio-recorder', 'flex flex-col items-center justify-center space-y-4');

  return (
    <div className={classNames}>
      <Button variant="standard" color="error" shape="circle" size="md" icon={<StopIcon />} />
      <p>Duration: {'0:00'}</p>
    </div>
  );
};
