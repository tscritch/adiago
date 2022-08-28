import React from 'react';
import classnames from 'classnames';

export type TSidebarPosition = 'left' | 'right';

export interface SidebarRootProps {
  children?: React.ReactNode;
  position?: TSidebarPosition;
}

const baseClasses = 'adiago-sidebar-root h-full w-48 border-neutral-100 dark:border-neutral-800';
const positionClasses = {
  left: 'border-r',
  right: 'border-l'
};

export const SidebarRoot: React.FC<SidebarRootProps> = ({ children, position = 'left' }) => {
  const classNames = classnames(baseClasses, positionClasses[position]);

  return <div className={classNames}>{children}</div>;
};

SidebarRoot.displayName = 'SidebarRoot';
