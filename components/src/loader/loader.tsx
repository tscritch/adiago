import React from 'react';
import classnames from 'classnames';

export type TLoaderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface LoaderProps {
  className?: string;
  classOverride?: string;
  size?: TLoaderSize;
}

const sizeClassnames: Record<TLoaderSize, string> = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8'
};

export const Loader: React.FC<LoaderProps> = ({ classOverride, className, size = 'md', ...props }) => {
  const classNames = classOverride ?? classnames('adiago-loader', sizeClassnames[size], className);

  return (
    <div>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={classNames}>
        <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" />
        <path
          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
          className="animate-spin origin-center"
        />
      </svg>
    </div>
  );
};

Loader.displayName = 'Loader';
