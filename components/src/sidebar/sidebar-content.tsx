import React from 'react';
import classnames from 'classnames';
import { Vertical as ScrollAreaVertical } from '../scroll-area';

interface SidebarContentProps {
  children?: React.ReactNode;
  className?: string;
}

export const SidebarContent: React.FC<SidebarContentProps> = ({ children, className }) => {
  const classNames = classnames('adiago-sidebar-content overflow-hidden', className);

  return <ScrollAreaVertical className={classNames}>{children}</ScrollAreaVertical>;
};

SidebarContent.displayName = 'SidebarContent';