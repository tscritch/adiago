import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { Button } from '../button';
import { getTheme, setTheme } from '../_utils/root/functions';

export const ThemeToggleButton = () => {
  const [theme, setStateTheme] = React.useState(getTheme());

  const onClick = () => {
    const rtheme = getTheme();
    if (rtheme === 'os' || rtheme === 'dark') {
      setStateTheme('light');
      setTheme('light');
    } else {
      setStateTheme('dark');
      setTheme('dark');
    }
  };

  return (
    <Button size="xs" color="opaque" variant="transparent" onClick={onClick}>
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
