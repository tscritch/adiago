import React from 'react';

export interface IAudioPlayerTrack {
  id: string;
  title: string;
  artist?: string;
  album?: string;
  artwork?: string;
  src: string;
}

export interface IAudioPlayerState {
  isPlaying: boolean;
  queue: IAudioPlayerTrack[];
  /**
   * The id of the current track
   */
  currentTrack?: string;
  volume: number;
  timeProgress: number;
  percentageProgress: number;
}

export interface IAudioPlayerContextPlaybackControls {
  /**
   * Plays the given track or the given track id if in the queue
   * Or if no argument given will play the current track if paused, or the first track in the queue if there is no current track
   */
  play: (track?: IAudioPlayerTrack | string) => void;
  pause: () => void;
  next: () => void;
  previous: () => void;
  /**
   * Stops playback and removes the current track
   */
  stop: () => void;
  enqueue: (tracks: IAudioPlayerTrack | IAudioPlayerTrack[]) => void;
  dequeue: (tracks: IAudioPlayerTrack | IAudioPlayerTrack[]) => void;
  clearQueue: () => void;
}

export interface IAudioPlayerContextVolumeControls {
  setVolume: (volume: number) => void;
  mute: () => void;
  unmute: () => void;
}

export interface IAudioPlayerContext
  extends IAudioPlayerState,
    IAudioPlayerContextPlaybackControls,
    IAudioPlayerContextVolumeControls {}

export const initialState: IAudioPlayerContext = {
  isPlaying: false,
  queue: [],
  volume: 75,
  timeProgress: 0,
  percentageProgress: 0,
  play: () => {},
  pause: () => {},
  next: () => {},
  previous: () => {},
  stop: () => {},
  enqueue: () => {},
  dequeue: () => {},
  clearQueue: () => {},
  setVolume: () => {},
  mute: () => {},
  unmute: () => {}
};

export const AdiagoAudioPlayerContext = React.createContext<IAudioPlayerContext>(initialState);

export const useAudioPlayerContext = () => React.useContext(AdiagoAudioPlayerContext);

export const useAudioPlayerContextState = () => {
  const audioRef = React.useRef(new Audio());
  const intervalRef = React.useRef();
  const isReady = React.useRef(false);

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [queue, setQueue] = React.useState<IAudioPlayerTrack[]>([]);
  const [currentTrack, setCurrentTrack] = React.useState<string>();
  const [volume, setVolume] = React.useState(75);
  const [timeProgress, setTimeProgress] = React.useState(0);

  const play = React.useCallback((track?: IAudioPlayerTrack | string) => {
    if (typeof track === 'string') {
      const trackInQueue = queue.find((t) => t.id === track);
      if (trackInQueue) {
        setCurrentTrack(trackInQueue.id);
        setIsPlaying(true);
      }
    } else if (track) {
      setCurrentTrack(track.id);
      setIsPlaying(true);
    } else if (currentTrack) {
      setIsPlaying(true);
    } else if (queue.length > 0) {
      setCurrentTrack(queue[0].id);
      setIsPlaying(true);
    }
    audioRef.current.play();
  }, []);

  const pause = React.useCallback(() => {
    setIsPlaying(false);
    audioRef.current.pause();
  }, []);

  const next = React.useCallback(() => {
    const currentIndex = queue.findIndex((t) => t.id === currentTrack);
    if (currentIndex < queue.length - 1) {
      setCurrentTrack(queue[currentIndex + 1].id);
    } else {
      setCurrentTrack(queue[0].id);
    }
  }, [currentTrack, queue]);

  const previous = React.useCallback(() => {
    if (timeProgress > 3) {
      audioRef.current.currentTime = 0;
      return;
    }

    const currentIndex = queue.findIndex((t) => t.id === currentTrack);
    if (currentIndex > 0) {
      setCurrentTrack(queue[currentIndex - 1].id);
    } else {
      setCurrentTrack(queue[queue.length - 1].id);
    }
  }, []);
};
