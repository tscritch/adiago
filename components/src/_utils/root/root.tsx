import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { AdiagoTheme } from './theme';
import Tooltip from '../../tooltip';

export interface AdiagoRootProps {
  children: React.ReactNode;
}

export const AdiagoRoot: React.FC<AdiagoRootProps> = ({ children }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Tooltip.Provider>
        <AdiagoTheme />
        {children}
      </Tooltip.Provider>
    </DndProvider>
  );
};
