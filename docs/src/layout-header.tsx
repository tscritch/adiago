import { ThemeToggleButton } from '@adiago/components';
import { Link } from 'react-router-dom';

export const LayoutHeader: React.FC = () => {
  return (
    <div className="adiago-layout-header w-full p-2 flex justify-between items-center border-b border-neutral-100 dark:border-neutral-800">
      <Link to="/">
        <div className="flex items-center space-x-1">
          <img src="/logo.png" className="w-8" />
          <h1 className="pt-1 text-lg font-bold text-neutral-900 dark:text-white">Adiago</h1>
        </div>
      </Link>

      <Link to="/docs/Intro">
        <h1 className="text-md text-neutral-900 dark:text-white">Docs</h1>
      </Link>

      <ThemeToggleButton />
    </div>
  );
};

LayoutHeader.displayName = 'LayoutHeader';
