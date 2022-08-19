import { ThemeToggleButton } from '@adiago/components';
import { Link } from 'react-router-dom';

export const LayoutHeader: React.FC = () => {
  return (
    <div className="adiago-layout-header w-full p-2 flex justify-between border-b border-neutral-100 dark:border-neutral-800">
      <Link to="/">
        <h1 className="text-md text-neutral-900 dark:text-white">Adiago</h1>
      </Link>

      <Link to="/docs/Intro">
        <h1 className="text-md text-neutral-900 dark:text-white">Docs</h1>
      </Link>

      <ThemeToggleButton />
    </div>
  );
};

LayoutHeader.displayName = 'LayoutHeader';
