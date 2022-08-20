import React from 'react';
import classnames from 'classnames';

interface SidebarListProps {
  children?: React.ReactNode;
}

export const SidebarList: React.FC<SidebarListProps> = ({ children }) => {
  const classNames = classnames('adiago-sidebar-list p-2');

  return <div className={classNames}>{children}</div>;
};

SidebarList.displayName = 'SidebarList';
