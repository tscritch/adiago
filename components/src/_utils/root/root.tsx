import React from 'react';
import { AdiagoTheme } from './theme';

export interface AdiagoRootProps {
  children: React.ReactNode;
}

export const AdiagoRoot: React.FC<AdiagoRootProps> = ({ children }) => {
  return (
    <>
      <AdiagoTheme />
      {children}
    </>
  );
};
