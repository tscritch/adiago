import React from 'react';
import { clamp } from '../_utils/functions';

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
  muted: boolean;
  timeProgress: number;
  percentageProgress: number;
  repeat: 'none' | 'current' | 'all';
  shuffle: boolean;
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
  seek: (time: number) => void;
  onSeekEnd: () => void;
  /**
   * Stops playback and removes the current track
   */
  stop: () => void;
}

export interface IAudioPlayerContextPlaybackQueueControls {
  enqueue: (tracks: IAudioPlayerTrack | IAudioPlayerTrack[]) => void;
  dequeue: (tracks: IAudioPlayerTrack | IAudioPlayerTrack[]) => void;
  clearQueue: () => void;
  setRepeat: (repeat: 'none' | 'current' | 'all') => void;
  /**
   * Toggles shuffle on and off. When shuffle is set to true, the queue will be shuffled
   */
  setShuffle: (shuffle: boolean) => void;
}

export interface IAudioPlayerContextVolumeControls {
  setVolume: (volume: number) => void;
  mute: () => void;
  unmute: () => void;
}

export interface IAudioPlayerContext
  extends IAudioPlayerState,
    IAudioPlayerContextPlaybackControls,
    IAudioPlayerContextPlaybackQueueControls,
    IAudioPlayerContextVolumeControls {}

export const initialState: IAudioPlayerContext = {
  isPlaying: false,
  queue: [],
  volume: 75,
  muted: false,
  timeProgress: 0,
  percentageProgress: 0,
  repeat: 'none',
  shuffle: false,
  play: () => {},
  pause: () => {},
  next: () => {},
  previous: () => {},
  seek: () => {},
  onSeekEnd: () => {},
  stop: () => {},
  enqueue: () => {},
  dequeue: () => {},
  clearQueue: () => {},
  setRepeat: () => {},
  setShuffle: () => {},
  setVolume: () => {},
  mute: () => {},
  unmute: () => {}
};

export const AdiagoAudioPlayerContext = React.createContext<IAudioPlayerContext>(initialState);

export const useAudioPlayerContext = () => React.useContext(AdiagoAudioPlayerContext);

export const useAudioPlayerContextState = (): IAudioPlayerContext => {
  const audioRef = React.useRef(new Audio());
  const intervalRef = React.useRef<number>();

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [queue, setQueue] = React.useState<IAudioPlayerTrack[]>([]);
  const [repeatState, setRepeatState] = React.useState<'none' | 'current' | 'all'>('none');
  const [shuffleState, setShuffleState] = React.useState(false);
  const [currentTrack, setCurrentTrack] = React.useState<string>();
  const [muted, setMuted] = React.useState(false);
  const [volumeState, setVolumeState] = React.useState(75);
  const [timeProgress, setTimeProgress] = React.useState(0);

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        switch (repeatState) {
          case 'none':
            stop();
            break;
          case 'current':
            play(currentTrack);
            break;
          case 'all':
            next();
            break;
        }
      } else {
        setTimeProgress(audioRef.current.currentTime);
      }
    }, 100);
  };

  const playTrack = React.useCallback((trackId: string) => {
    const track = queue.find((track) => track.id === trackId);

    if (track) {
      audioRef.current.src = track.src;
      audioRef.current.play();
      setCurrentTrack(track.id);
      setIsPlaying(true);
      startTimer();
    }
  }, []);

  const play = React.useCallback((track?: IAudioPlayerTrack | string) => {
    if (typeof track === 'string') {
      const trackInQueue = queue.find((t) => t.id === track);
      if (trackInQueue) {
        playTrack(trackInQueue.id);
      } else {
        console.warn('AdiagoAudioPlayer: Track not found in queue');
      }
    } else if (track) {
      playTrack(track.id);
    } else if (currentTrack) {
      playTrack(currentTrack);
    } else if (queue.length > 0) {
      playTrack(queue[0].id);
    }
  }, []);

  const pause = React.useCallback(() => {
    setIsPlaying(false);
    audioRef.current.pause();
    clearInterval(intervalRef.current);
  }, []);

  const next = React.useCallback(() => {
    const currentIndex = queue.findIndex((t) => t.id === currentTrack);
    if (currentIndex < queue.length - 1) {
      playTrack(queue[currentIndex + 1].id);
    } else {
      playTrack(queue[0].id);
    }
  }, [currentTrack, queue]);

  const previous = React.useCallback(() => {
    if (timeProgress > 3) {
      audioRef.current.currentTime = 0;
      return;
    }

    const currentIndex = queue.findIndex((t) => t.id === currentTrack);
    if (currentIndex > 0) {
      playTrack(queue[currentIndex - 1].id);
    } else {
      playTrack(queue[queue.length - 1].id);
    }
  }, []);

  const seek = React.useCallback((time: number) => {
    clearInterval(intervalRef.current);
    time = clamp(time, 0, audioRef.current.duration);
    audioRef.current.currentTime = time;
    setTimeProgress(time);
  }, []);

  const onSeekEnd = React.useCallback(() => {
    if (!isPlaying) {
      play();
    }
    startTimer();
  }, []);

  const stop = React.useCallback(() => {
    setIsPlaying(false);
    setCurrentTrack(undefined);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }, []);

  const enqueue = React.useCallback((tracks: IAudioPlayerTrack | IAudioPlayerTrack[]) => {
    if (Array.isArray(tracks)) {
      setQueue((q) => [...q, ...tracks]);
    } else {
      setQueue((q) => [...q, tracks]);
    }
  }, []);

  const dequeue = React.useCallback((tracks: IAudioPlayerTrack | IAudioPlayerTrack[]) => {
    if (Array.isArray(tracks)) {
      setQueue((q) => q.filter((t) => !tracks.includes(t)));
    } else {
      setQueue((q) => q.filter((t) => t !== tracks));
    }
  }, []);

  const clearQueue = React.useCallback(() => {
    setQueue([]);
  }, []);

  const setRepeat = React.useCallback((repeat: 'none' | 'current' | 'all') => {
    setRepeatState(repeat);
  }, []);

  const setShuffle = React.useCallback((shuffle: boolean) => {
    // TODO: Implement shuffle on queue
    setShuffleState(shuffle);
  }, []);

  /**
   * Set Volume from 0 to 1
   * @param volume number from 0 to 1
   */
  const setVolume = React.useCallback((volume: number) => {
    // clamp volume between 0 and 1
    volume = clamp(volume, 0, 1);
    setVolumeState(volume);
  }, []);

  const mute = React.useCallback(() => {
    setMuted(true);
  }, []);

  const unmute = React.useCallback(() => {
    setMuted(false);
  }, []);

  return {
    isPlaying,
    queue,
    currentTrack,
    volume: volumeState,
    muted,
    timeProgress,
    percentageProgress: timeProgress / audioRef.current.duration,
    repeat: repeatState,
    shuffle: shuffleState,
    play,
    pause,
    next,
    previous,
    seek,
    onSeekEnd,
    stop,
    enqueue,
    dequeue,
    clearQueue,
    setRepeat,
    setShuffle,
    setVolume,
    mute,
    unmute
  };
};
