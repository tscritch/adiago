import React from 'react';
import { AdiagoTheme } from './theme';
import Tooltip from '../../tooltip';

export interface AdiagoRootProps {
  children: React.ReactNode;
}

export const AdiagoRoot: React.FC<AdiagoRootProps> = ({ children }) => {
  return (
    <Tooltip.Provider>
      <AdiagoTheme />
      {children}
    </Tooltip.Provider>
  );
};
