import React from 'react';

export const AdiagoNativeAudioContext = React.createContext<AudioContext | null>(null);

export const useNativeAudioContext = () => {
  const context = React.useContext(AdiagoNativeAudioContext);
  if (!context) {
    throw new Error('No AudioContext found');
  }
  return context;
};
