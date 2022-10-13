import { Audio, Button } from '@adiago/components';

export const PageDocsAudio_Player = () => {
  const { enqueue } = Audio.useContext();

  return (
    <div>
      <div className="p-4">
        <Audio.SimplePlayer src="https://cdn.bensound.com/bensound-blessing.mp3" />
      </div>
      <div className="p-4 flex space-x-4">
        <Button
          onClick={() =>
            enqueue({
              id: '1',
              src: 'https://cdn.bensound.com/bensound-blessing.mp3',
              title: 'Blessing',
              artist: 'Benjamin Tissot',
              album: 'bensound.com',
              artwork: 'https://cdn.bensound.com/image/cover/soyb-X2.webp'
            })
          }>
          Queue Song
        </Button>
        <Audio.ComposedPlayer />
      </div>
    </div>
  );
};
