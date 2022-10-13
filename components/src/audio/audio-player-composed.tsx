import React from 'react';
import classnames from 'classnames';
import { Progress } from '../progress';
import { Button } from '../button';
import { ArrowPathRoundedSquareIcon, PauseIcon, PlayIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';
import { useAudioPlayerContext } from './audio-player-context';
import { formatTime } from '../_utils/functions';

export interface AudioPlayerComposedProps {
  className?: string;
  classOverride?: string;
}

export const AudioPlayerComposed: React.FC<AudioPlayerComposedProps> = ({ className, classOverride }) => {
  const context = useAudioPlayerContext();
  console.log(context);

  const classNames =
    classOverride ??
    classnames(
      'adiago-audio-composed shadow-md bg-white rounded border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-700',
      className
    );

  return (
    <div className={classNames}>
      <div className="adiago-audio-composed-info relative p-3 flex items-center justify-center overflow-hidden">
        <div className="adiago-audio-composed-info-artwork">
          <img
            className="h-16 w-16 object-cover rounded"
            src={
              context.currentTrack?.artwork ||
              'https://images.wombo.art/exports/569e3fd0-375c-4f42-ae2a-9fabb0bc8953/blank_tradingcard.jpg?Expires=1672739782&Signature=F90L-bXpDCpBVxzw-5z~O7hwV6m87tTK5o9B0vYkuKFgCz78F-zFtCs~p1P10UlnjMU~7YL7eHM8x2TWWjvjHLR9sMXiHe6DX5NZ7yGa8v4JlMQ~0H7uEzs6Lv6~8s91GTn6H7cPsktBUeyc3mRzZfbtAsFdKIrsaJUrG3CBrEbZsXEIsJkJ8KajjsEUHIxlenytcpGUIVZmB8gSMeljEaK7KIf42EVUdkVxwu42GVvxNprcLaZb1lSARpQw7g7Q7bSvOln24aPKbqK65l7ExesqnQ-A0Mv5ax3Bhx0JK4wUbbVNUhBA5Hy0CqpdbgjsHadIvL7cuPO9Ks2Gt-vIkQ__&Key-Pair-Id=K1ZXCNMC55M2IL'
            }
            alt="artwork"
          />
        </div>
        <div className="adiago-audio-composed-info-text flex-1 ml-3">
          <div className="adiago-audio-composed-info-title font-bold">{context.currentTrack?.title || ''}</div>
          <div className="flex space-x-4">
            <div className="adiago-audio-composed-info-artist">{context.currentTrack?.artist || ''}</div>
            <div className="adiago-audio-composed-info-album">{context.currentTrack?.album || ''}</div>
          </div>
        </div>
      </div>

      <div className="adiago-audio-composed-progress m-auto">
        <Progress value={context.percentageProgress ? context.percentageProgress * 100 : 0} />
      </div>

      <div className="adiago-audio-composed-controls p-3 flex justify-between items-center space-x-4">
        <Button
          variant="flat"
          color="opaque"
          icon={context.isPlaying ? <PauseIcon /> : <PlayIcon />}
          onClick={() => {
            if (context.isPlaying) {
              context.pause();
            } else {
              context.play();
            }
          }}
        />
        <Button variant="transparent" color="opaque" icon={<SpeakerWaveIcon />} />
        <div className="flex-1 text-sm pt-[2px] font-bold">
          <time>{formatTime(context.timeProgress * 1000)}</time>
          <span> / </span>
          <time>{formatTime((context.currentTrackDuration || 0) * 1000)}</time>
        </div>
        <Button variant="transparent" color="opaque" icon={<ArrowPathRoundedSquareIcon />} />
      </div>
    </div>
  );
};
