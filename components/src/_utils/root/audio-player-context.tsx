import React from 'react';
import { AdiagoAudioPlayerContext, useAudioPlayerContextState } from '../../audio/audio-player-context';

export interface AdiagoAudioPlayerProviderProps {
  children: React.ReactNode;
}

export const AdiagoAudioPlayerProvider: React.FC<AdiagoAudioPlayerProviderProps> = ({ children }) => {
  const state = useAudioPlayerContextState();

  return <AdiagoAudioPlayerContext.Provider value={state}>{children}</AdiagoAudioPlayerContext.Provider>;
};
