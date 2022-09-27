import React from 'react';
import classnames from 'classnames';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { useDrag, useDrop } from 'react-dnd';
import type { Identifier, XYCoord } from 'dnd-core';

import { SIDEBAR_DRAGGABLE_TYPES } from './sidebar-draggable-types';

import Dropdown from '../dropdown';
import { DropdownItem } from '../dropdown/dropdown-composed';

export interface TSidebarListItemDraggable {
  id: string;
  parentId?: string;
  index: number;
}

export interface TSidebarListItemOnSortContextPosition {
  parentId?: string;
  index: number;
}
export interface TSidebarListItemOnSortContext {
  itemId: string;
  from: TSidebarListItemOnSortContextPosition;
  to: TSidebarListItemOnSortContextPosition;
}

export type TSidebarListItemOnSortFn = (context: TSidebarListItemOnSortContext) => void;

export interface SidebarListItemProps {
  children?: React.ReactNode;
  className?: string;
  active?: boolean;
  actions?: DropdownItem[];
  actionIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  /**
   * Must be provided if the item is draggable
   */
  draggableProps?: {
    id: string;
    index: number;
    onSort?: TSidebarListItemOnSortFn;
    parentId?: string;
  };
}

const baseClasses =
  'adiago-sidebar-list-item group flex items-center justify-between pl-2 pr-1 py-1 mb-1 text-xs rounded text-neutral-900 cursor-pointer hover:bg-djent-100 dark:text-white dark:hover:bg-neutral-800 user-select-none';
const activeClasses = 'bg-djent-500 text-white hover:bg-djent-600 dark:hover:bg-djent-600';
const disabledClasses = 'pointer-events-none text-neutral-500 dark:text-neutral-700 hover:bg-transparent';
const draggingClasses = 'invisible';

export const SidebarListItem: React.FC<SidebarListItemProps> = ({
  children,
  className,
  active,
  actions,
  actionIcon,
  disabled,
  onClick,
  draggableProps
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [collected, drag, dragPreview] = useDrag<TSidebarListItemDraggable, unknown, { isDragging: boolean }>(() => {
    if (draggableProps) {
      return {
        type: SIDEBAR_DRAGGABLE_TYPES.LIST_ITEM,
        item: {
          id: draggableProps.id,
          parentId: draggableProps.parentId,
          index: draggableProps.index
        },
        canDrag: () => !!(draggableProps && !disabled),
        collect: (monitor) => ({
          isDragging: monitor.isDragging()
        })
      };
    }

    return {
      type: SIDEBAR_DRAGGABLE_TYPES.LIST_ITEM
    };
  });

  const [{ handlerId }, drop] = useDrop<TSidebarListItemDraggable, void, { handlerId: Identifier | null }>({
    accept: SIDEBAR_DRAGGABLE_TYPES.LIST_ITEM,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item: TSidebarListItemDraggable, monitor) {
      if (!ref.current || !draggableProps || !draggableProps.onSort) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = draggableProps.index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      draggableProps.onSort({
        itemId: item.id,
        from: {
          parentId: item.parentId,
          index: dragIndex
        },
        to: {
          parentId: draggableProps.parentId,
          index: hoverIndex
        }
      });

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      // item.index = hoverIndex;
    }
  });

  const classNames = classnames(
    baseClasses,
    {
      [activeClasses]: active,
      [disabledClasses]: disabled,
      [draggingClasses]: collected.isDragging
    },
    className
  );

  if (collected.isDragging) {
    return (
      <div ref={dragPreview} className={classNames}>
        {children}
      </div>
    );
  }

  // update ref to be used by useDrop and useDrag
  drag(drop(ref));

  return (
    <div className={classNames} ref={ref} onClick={onClick} data-handler-id={handlerId}>
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
