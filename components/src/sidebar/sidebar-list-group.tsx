import React from 'react';
// import classnames from 'classnames';
import * as RadixCollapsible from '@radix-ui/react-collapsible';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { SidebarListItem } from './sidebar-list-item';

export interface SidebarListItemAction {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

export interface SidebarListItemProps {
  children?: React.ReactNode;
  label?: React.ReactNode;
  active?: boolean;
  actions?: SidebarListItemAction[];
  actionIcon?: React.ReactNode;
  disabled?: boolean;
}

// const baseClasses =
//   'adiago-sidebar-list-group group flex items-center justify-between pl-2 pr-1 py-1 mb-1 text-xs rounded text-neutral-900 cursor-pointer hover:bg-djent-100 dark:text-white dark:hover:bg-neutral-800';
// const activeClasses = 'bg-djent-500 text-white hover:bg-djent-600 dark:hover:bg-djent-600';
// const disabledClasses = 'pointer-events-none text-neutral-500 dark:text-neutral-700 hover:bg-transparent';

export const SidebarListGroup: React.FC<SidebarListItemProps> = ({ children, label, active, actions, disabled }) => {
  // const classNames = classnames(baseClasses, { [activeClasses]: active, [disabledClasses]: disabled });

  return (
    <RadixCollapsible.Root>
      <RadixCollapsible.Trigger className="w-full group" disabled={disabled}>
        <SidebarListItem {...{ active, actions, disabled }}>
          <ChevronRightIcon className="h-3 w-3 mr-2 group:rx-state-open:rotate-90s" />
          {label}
          {actions ? null : <div className="flex-1" />}
        </SidebarListItem>
      </RadixCollapsible.Trigger>

      <RadixCollapsible.Content className="pl-2">
        <div className="px-2 border-l border-neutral-200">{children}</div>
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
};

SidebarListItem.displayName = 'SidebarListItem';
