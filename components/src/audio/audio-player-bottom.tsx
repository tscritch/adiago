import React from 'react';
import classnames from 'classnames';
import { Button } from '../button';
// import { useTimer } from '../_hooks/useTimer';
// import { formatTime } from '../_utils/functions';
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';

export interface AudioPlayerSimpleProps {
  className?: string;
  classOverride?: string;
  src: string;
}

export const AudioPlayerSimple: React.FC<AudioPlayerSimpleProps> = ({ className, classOverride, src }) => {
  const audioRef = React.useRef<HTMLAudioElement>(new Audio(src));

  const [isPlaying, setIsPlaying] = React.useState(false);

  // set the audio source when the src prop changes
  React.useEffect(() => {
    audioRef.current = new Audio(src);
  }, [src]);

  const onTogglePlaying = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const classNames = classnames('adiago-audio-simple', className);

  return (
    <div className={classNames}>
      <Button
        shape="circle"
        onClick={onTogglePlaying}
        icon={isPlaying ? <PauseIcon className="w-2 h-2" /> : <PlayIcon className="w-[2.1rem] h-2" />}
      />
    </div>
  );
};
