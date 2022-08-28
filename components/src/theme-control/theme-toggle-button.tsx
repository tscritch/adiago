import React from 'react';
import { Button } from '../button/button';
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
    <Button color="opaque" onClick={onClick}>
      {theme}
    </Button>
  );
};
