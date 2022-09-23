import React from 'react';
import classnames from 'classnames';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import Dropdown from '../dropdown';
import { DropdownItem } from 'src/dropdown/dropdown-composed';

export interface SidebarListItemAction {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

export interface SidebarListItemProps {
  children?: React.ReactNode;
  active?: boolean;
  actions?: DropdownItem[];
  actionIcon?: React.ReactNode;
  disabled?: boolean;
}

const baseClasses =
  'adiago-sidebar-list-item group flex items-center justify-between pl-2 pr-1 py-1 mb-1 text-xs rounded text-neutral-900 cursor-pointer hover:bg-djent-100 dark:text-white dark:hover:bg-neutral-800';
const activeClasses = 'bg-djent-500 text-white hover:bg-djent-600 dark:hover:bg-djent-600';
const disabledClasses = 'pointer-events-none text-neutral-500 dark:text-neutral-700 hover:bg-transparent';

export const SidebarListItem: React.FC<SidebarListItemProps> = ({
  children,
  active,
  actions,
  actionIcon,
  disabled
}) => {
  const classNames = classnames(baseClasses, { [activeClasses]: active, [disabledClasses]: disabled });

  return (
    <div className={classNames}>
      {children}

      {!disabled && actions ? (
        <Dropdown.Composed
          items={actions}
          trigger={
            <button className="invisible group-hover:visible rx-state-open:visible">
              {actionIcon || <EllipsisHorizontalIcon className="h-4 w-6" />}
            </button>
          }
          align="end"
        />
      ) : null}
    </div>
  );
};

SidebarListItem.displayName = 'SidebarListItem';
