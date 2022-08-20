import React from 'react';
import classnames from 'classnames';

type TSidebarPosition = 'left' | 'right';

interface SidebarRootProps {
  children?: React.ReactNode;
  position?: TSidebarPosition;
}

export const SidebarRoot: React.FC<SidebarRootProps> = ({ children, position = 'left' }) => {
  const classNames = classnames('adiago-sidebar-root h-full w-48 border-r border-neutral-100');

  return <div className={classNames}>{children}</div>;
};

SidebarRoot.displayName = 'SidebarRoot';
