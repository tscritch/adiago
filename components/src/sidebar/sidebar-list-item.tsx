import React from 'react';
import classnames from 'classnames';
import { Button } from '../button';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import Dropdown from '../dropdown';

export interface SidebarListItemAction {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

export interface SidebarListItemProps {
  children?: React.ReactNode;
  active?: boolean;
  actions?: SidebarListItemAction[];
  actionIcon?: React.ReactNode;
  disabled?: boolean;
}

const baseClasses =
  'adiago-sidebar-list-item flex items-center justify-between pl-2 pr-1 py-1 mb-1 text-xs rounded text-neutral-900 cursor-pointer hover:bg-djent-100 dark:text-white dark:hover:bg-neutral-800';
const activeClasses = 'bg-djent-500 text-white hover:bg-djent-600 dark:hover:bg-djent-600';
const disabledClasses = 'pointer-events-none text-neutral-500 dark:text-neutral-700 hover:bg-transparent';

export const SidebarListItem: React.FC<SidebarListItemProps> = ({ children, active, actions, disabled }) => {
  const classNames = classnames(baseClasses, { [activeClasses]: active, [disabledClasses]: disabled });

  const actionDropdownItems = React.useMemo(() => {
    return actions?.map((action, i) => (
      <Dropdown.Item
        key={`adiago-sidebar-list-item-action-${action.label}-${i}`}
        onClick={action.onClick}
        disabled={action.disabled}>
        {action.label}
      </Dropdown.Item>
    ));
  }, [actions]);

  const actionsDropdown = React.useMemo(
    () => (
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button size="xs" color="opaque" variant="transparent" icon={<EllipsisHorizontalIcon />} />
        </Dropdown.Trigger>

        <Dropdown.Content align="start" sideOffset={4}>
          {actionDropdownItems}
        </Dropdown.Content>
      </Dropdown.Root>
    ),
    []
  );

  return (
    <div className={classNames}>
      {children}

      {!disabled && actions ? actionsDropdown : null}
    </div>
  );
};

SidebarListItem.displayName = 'SidebarListItem';
