import React from 'react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';
import ToggleGroup from '../toggle-group';
import { getTheme, setTheme, ThemeType } from '../_utils/root/functions';

const textClassnames = 'pt-[2px] pl-1';
const iconClassnames = 'w-3 h-3';

export const ThemeToggleButton = () => {
  const [theme, setStateTheme] = React.useState(getTheme());

  const onThemeChange = (value: ThemeType) => {
    setStateTheme(value);
    setTheme(value);
  };

  return (
    <ToggleGroup.Root value={theme} onValueChange={onThemeChange}>
      <ToggleGroup.Item value="light">
        <SunIcon className={iconClassnames} />
        <p className={textClassnames}>Light</p>
      </ToggleGroup.Item>
      <ToggleGroup.Item value="dark">
        <MoonIcon className={iconClassnames} />
        <p className={textClassnames}>Dark</p>
      </ToggleGroup.Item>
      <ToggleGroup.Item value="os">
        <ComputerDesktopIcon className={iconClassnames} />
        <p className={textClassnames}>OS</p>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
