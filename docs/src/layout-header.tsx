import { ThemeToggleButton } from '@adiago/components';
import { Link } from 'react-router-dom';

export const LayoutHeader: React.FC = () => {
  return (
    <div className="aidago-layout-header w-full p-2 flex justify-between">
      <Link to="/">
        <h1 className="text-md text-neutral-900 dark:text-white">Aidago</h1>
      </Link>

      <Link to="/docs/Intro">
        <h1 className="text-md text-neutral-900 dark:text-white">Docs</h1>
      </Link>

      <ThemeToggleButton />
    </div>
  );
};

LayoutHeader.displayName = 'LayoutHeader';
