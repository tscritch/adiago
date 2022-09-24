import React from 'react';
import { SidebarRoot } from './sidebar-root';
import { SidebarContent } from './sidebar-content';
import { SidebarListItem, TSidebarListItemOnSortFn } from './sidebar-list-item';
import { SidebarListGroup } from './sidebar-list-group';
import { DropdownItem } from '../dropdown/dropdown-composed';

interface TSidebarListItem {
  id: string;
  label: string;
  disabled?: boolean;
  onClick?: (itemId: string) => void;
  actions?: DropdownItem[];
  childItems?: TSidebarListItem[];
}

export interface SidebarComposedProps {
  items: TSidebarListItem[];
  activeItemId?: string;
  sortable?: boolean;
  onItemClick?: (itemId: string) => void;
  onSort?: TSidebarListItemOnSortFn;
}

export const SidebarComposed: React.FC<SidebarComposedProps> = ({
  items,
  activeItemId,
  sortable,
  onItemClick,
  onSort
}) => {
  return (
    <SidebarRoot>
      <SidebarContent className="p-2">
        {renderItems({ items, activeItemId, sortable, onItemClick, onSort })}
      </SidebarContent>
    </SidebarRoot>
  );
};

const renderItems = ({ items, activeItemId, sortable, onItemClick, onSort }: SidebarComposedProps) => {
  const onClick = (itemId: string) => {
    if (onItemClick) {
      onItemClick(itemId);
    }
  };

  return items.map((item) => {
    if (item.childItems) {
      return (
        <SidebarListGroup
          key={item.id}
          active={activeItemId === item.id}
          label={item.label}
          disabled={item.disabled}
          onClick={() => {
            item.onClick && item.onClick(item.id);
            onClick(item.id);
          }}
          actions={item.actions}
          draggable={sortable}>
          {renderItems({ items: item.childItems, activeItemId, sortable, onItemClick, onSort })}
        </SidebarListGroup>
      );
    }
    return (
      <SidebarListItem
        key={item.id}
        active={item.id === activeItemId}
        disabled={item.disabled}
        onClick={() => {
          item.onClick && item.onClick(item.id);
          onClick(item.id);
        }}
        actions={item.actions}
        draggable={sortable}>
        {item.label}
      </SidebarListItem>
    );
  });
};
