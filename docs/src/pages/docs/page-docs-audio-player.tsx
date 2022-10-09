import { Audio } from '@adiago/components';

export const PageDocsAudio_Player = () => {
  return (
    <div>
      <div className="p-4">
        <Audio.SimplePlayer src="https://cdn.bensound.com/bensound-blessing.mp3" />
      </div>
      <div className="p-4">{/* <Audio.PlayerComplete /> */}</div>
    </div>
  );
};
