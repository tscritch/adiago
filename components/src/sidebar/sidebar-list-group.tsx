import React from 'react';
import classnames from 'classnames';
import * as RadixCollapsible from '@radix-ui/react-collapsible';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { SidebarListItem, SidebarListItemProps } from './sidebar-list-item';

export interface SidebarListGroupProps extends SidebarListItemProps {
  children?: React.ReactNode;
  label?: React.ReactNode;
  hasActiveChild?: boolean;
}

export const SidebarListGroup: React.FC<SidebarListGroupProps> = ({
  children,
  label,
  active,
  hasActiveChild,
  actions,
  actionIcon,
  disabled,
  draggable,
  onClick,
  onSort
}) => {
  const [open, setOpen] = React.useState(false);
  const iconClassnames = classnames('h-3 w-3 mr-2 transition-all duration-75', { 'rotate-90': open });
  const activeChildClassnames = classnames({ 'bg-djent-100': !open && hasActiveChild });

  return (
    <RadixCollapsible.Root open={open} onOpenChange={setOpen}>
      <RadixCollapsible.Trigger className="w-full group" disabled={disabled}>
        <SidebarListItem
          {...{ active, actions, actionIcon, disabled, draggable, onClick, onSort }}
          className={activeChildClassnames}>
          <ChevronRightIcon
            className={iconClassnames}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              setOpen((prevOpen) => !prevOpen);
            }}
          />
          {label}
          <div className="flex-1" />
        </SidebarListItem>
      </RadixCollapsible.Trigger>

      <RadixCollapsible.Content className="pl-2 overflow-hidden rx-state-open:animate-rx-collapsible-height-open rx-state-closed:animate-rx-collapsible-height-close">
        <div className="px-2 border-l border-neutral-200">{children}</div>
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
};

SidebarListGroup.displayName = 'SidebarListGroup';
