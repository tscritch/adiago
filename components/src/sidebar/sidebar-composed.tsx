import React from 'react';
import { SidebarRoot } from './sidebar-root';
import { SidebarContent } from './sidebar-content';
import { SidebarListItem, TSidebarListItemOnSortFn } from './sidebar-list-item';
import { SidebarListGroup } from './sidebar-list-group';
import { DropdownItem } from '../dropdown/dropdown-composed';

export interface TSidebarListItem {
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

interface RenderItemsProps extends SidebarComposedProps {
  parentId?: string;
  parentIndex?: number;
}

const renderItems = ({
  items,
  activeItemId,
  sortable,
  onItemClick,
  onSort,
  parentId,
  parentIndex = 0
}: RenderItemsProps) => {
  const onClick = (itemId: string) => {
    if (onItemClick) {
      onItemClick(itemId);
    }
  };

  return items.map((item, index) => {
    const itemIndex = parentIndex + index;
    if (item.childItems) {
      return (
        <SidebarListGroup
          key={item.id}
          active={activeItemId === item.id}
          hasActiveChild={item.childItems.some((childItem) => childItem.id === activeItemId)}
          label={item.label}
          disabled={item.disabled}
          onClick={() => {
            item.onClick && item.onClick(item.id);
            onClick(item.id);
          }}
          actions={item.actions}
          draggableProps={sortable ? { id: item.id, parentId, index: itemIndex, onSort } : undefined}>
          {renderItems({
            items: item.childItems,
            activeItemId,
            sortable,
            onItemClick,
            onSort,
            parentId: item.id,
            parentIndex: itemIndex + 1
          })}
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
        draggableProps={sortable ? { id: item.id, parentId, index: itemIndex, onSort } : undefined}>
        {item.label}
      </SidebarListItem>
    );
  });
};
