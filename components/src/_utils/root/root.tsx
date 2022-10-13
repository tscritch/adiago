import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { AdiagoNativeAudioContext } from './native-audio-context';
import { AdiagoTheme } from './theme';
import Tooltip from '../../tooltip';
import { AdiagoAudioPlayerProvider } from './audio-player-context';

window.AudioContext = window.AudioContext || (window as any).webkitAudioContext;

export interface AdiagoRootProps {
  children: React.ReactNode;
}

export const AdiagoRoot: React.FC<AdiagoRootProps> = ({ children }) => {
  return (
    <AdiagoNativeAudioContext.Provider value={new AudioContext()}>
      <AdiagoAudioPlayerProvider>
        <DndProvider backend={HTML5Backend}>
          <Tooltip.Provider>
            <AdiagoTheme />
            {children}
          </Tooltip.Provider>
        </DndProvider>
      </AdiagoAudioPlayerProvider>
    </AdiagoNativeAudioContext.Provider>
  );
};
