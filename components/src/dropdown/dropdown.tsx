import React from 'react';
import classnames from 'classnames';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';

interface DropdownRootProps {
  children?: React.ReactNode;
  className?: string;
  trigger: React.ReactNode;

  /**
    Pass through DropdownContent Props
  */
  /**
   * When true, keyboard navigation will loop from last item to first, and vice versa.
   */
  loop: boolean;
  onCloseAutoFocus: function;
  onEscapeKeyDown: function;
  onPointerDownOutside: function;
  onFocusOutside: function;
  onInteractOutside: function;
  forceMount: boolean;
  side: 'top' | 'right' | 'bottom' | 'left';
  sideOffset: number;
  /**
   * The preferred alignment against the trigger. May change when collisions occur.
   */
  align: 'start' | 'center' | 'end';
  alignOffset: number;
  avoidCollisions: boolean;
  collisionBoundary: Element | null | Array<Element | null>;
  collisionPadding: number;
  arrowPadding: number;
}

export const DropdownRoot: React.FC<DropdownRootProps> = ({ children, className, trigger }) => {
  const classNames = classnames('adiago-sidebar-content overflow-hidden', className);

  return (
    <RadixDropdown.Root>
      <RadixDropdown.Trigger asChild>{trigger}</RadixDropdown.Trigger>
      <RadixDropdown.Content>{children}</RadixDropdown.Content>
    </RadixDropdown.Root>
  );
};

DropdownRoot.displayName = 'DropdownRoot';

// export const DropdownMenu = DropdownMenuPrimitive.Root;
// export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
// export const DropdownMenuContent = Content;

// export const DropdownMenuItem = StyledItem;
// export const DropdownMenuCheckboxItem = StyledCheckboxItem;
// export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
// export const DropdownMenuRadioItem = StyledRadioItem;
// export const DropdownMenuItemIndicator = StyledItemIndicator;
// export const DropdownMenuLabel = StyledLabel;
// export const DropdownMenuSeparator = StyledSeparator;
// export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
// export const DropdownMenuSubTrigger = StyledSubTrigger;
// export const DropdownMenuSubContent = SubContent;
