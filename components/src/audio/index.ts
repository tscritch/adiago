import { AudioPlayerComposed } from './audio-player-composed';
import { useAudioPlayerContext } from './audio-player-context';
import { AudioPlayerSimple } from './audio-player-simple';
import { AudioRecorder } from './audio-recorder';

const Audio = {
  SimplePlayer: AudioPlayerSimple,
  ComposedPlayer: AudioPlayerComposed,
  Recorder: AudioRecorder,

  useContext: useAudioPlayerContext
};

export default Audio;
