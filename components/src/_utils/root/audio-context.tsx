import React from 'react';

export const AdiagoAudioContext = React.createContext<AudioContext | null>(null);

export const useAudioContext = () => {
  const context = React.useContext(AdiagoAudioContext);
  if (!context) {
    throw new Error('No AudioContext found');
  }
  return context;
};
