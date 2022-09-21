import React from 'react';
import classnames from 'classnames';

export interface CardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  classOverride?: string;
}

export const CardRoot: React.FC<CardRootProps> = ({ classOverride, className, ...props }) => {
  const classNames =
    classOverride ??
    classnames(
      'adiago-card',
      'p-2 shadow-md border border-neutral-100 rounded bg-white dark:bg-neutral-900 dark:border-neutral-800',
      className
    );

  return <div {...props} className={classNames} />;
};

CardRoot.displayName = 'CardRoot';
