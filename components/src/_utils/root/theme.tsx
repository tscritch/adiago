import React from 'react';
import { loadTheme } from './functions';

export const AdiagoTheme = () => {
  React.useEffect(() => {
    loadTheme();
  }, []);

  return null;
};

AdiagoTheme.displayName = 'AdiagoTheme';
