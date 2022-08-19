export type ThemeType = 'os' | 'light' | 'dark';

export const getTheme = (): ThemeType => {
  return 'theme' in localStorage ? localStorage.theme : 'os';
};

export const setTheme = (theme: ThemeType) => {
  switch (theme) {
    case 'light':
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      return;
    case 'dark':
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      return;
    case 'os':
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.theme = 'os';
      return;
    default:
      return;
  }
};

export const loadTheme = () => {
  const theme = getTheme();
  setTheme(theme);
};
