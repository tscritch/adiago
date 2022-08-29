// reference https://www.radix-ui.com/docs/primitives/components/dropdown-menu

import React from 'react';
import classnames from 'classnames';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import {
  DropdownMenuProps as RadixDropdownMenuProps,
  DropdownMenuTriggerProps as RadixDropdownMenuTriggerProps,
  DropdownMenuSubProps as RadixDropdownMenuSubProps,
  DropdownMenuContentProps as RadixDropdownMenuContentProps,
  DropdownMenuItemProps as RadixDropdownMenuItemProps,
  DropdownMenuCheckboxItemProps as RadixDropdownMenuCheckboxItemProps,
  DropdownMenuRadioGroupProps as RadixDropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps as RadixDropdownMenuRadioItemProps,
  DropdownMenuItemIndicatorProps as RadixDropdownMenuItemIndicatorProps,
  DropdownMenuLabelProps as RadixDropdownMenuLabelProps,
  DropdownMenuSeparatorProps as RadixDropdownMenuSeparatorProps,
  DropdownMenuSubTriggerProps as RadixDropdownMenuSubTriggerProps,
  DropdownMenuSubContentProps as RadixDropdownMenuSubContentProps
} from '@radix-ui/react-dropdown-menu';

export const DropdownMenuRoot = RadixDropdown.Root;
export type DropdownMenuRootProps = RadixDropdownMenuProps;
export const DropdownMenuTrigger = RadixDropdown.Trigger;
export type DropdownMenuTriggerProps = RadixDropdownMenuTriggerProps;
export const DropdownMenuSub = RadixDropdown.Sub;
export type DropdownMenuSubProps = RadixDropdownMenuSubProps;

// Content
// export interface DropdownMenuContentProps extends RadixDropdownMenuContentProps {
//   classOverride?: string;
// }
export type DropdownMenuContentProps = RadixDropdownMenuContentProps & {
  classOverride?: string;
};
export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ className, classOverride, ...props }) => {
  const classNames =
    classOverride ??
    classnames(
      'adiago-dropdown-content overflow-hidden min-w-[16rem] p-1 rounded shadow bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white',
      className
    );

  return <RadixDropdown.Content {...props} className={classNames} />;
};
DropdownMenuContent.displayName = 'DropdownMenuContent';

// Item
export interface DropdownMenuItemProps extends RadixDropdownMenuItemProps {
  classOverride?: string;
}
export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ className, classOverride, ...props }) => {
  const classNames =
    classOverride ??
    classnames(
      'adiago-dropdown-item py-1 px-1.5 text-xs cursor-pointer rounded-sm hover:bg-leaf-200 hover:text-leaf-900 hover:outline-none',
      className
    );

  return <RadixDropdown.Item {...props} className={classNames} />;
};
DropdownMenuItem.displayName = 'DropdownMenuItem';

// Checkbox Item
export interface DropdownMenuCheckboxItemProps extends RadixDropdownMenuCheckboxItemProps {
  classOverride?: string;
}
export const DropdownMenuCheckboxItem: React.FC<DropdownMenuCheckboxItemProps> = ({
  className,
  classOverride,
  ...props
}) => {
  const classNames = classOverride ?? classnames('adiago-dropdown-checkbox-item', className);

  return <RadixDropdown.CheckboxItem {...props} className={classNames} />;
};
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

// Radio Group
export interface DropdownMenuRadioGroupProps extends RadixDropdownMenuRadioGroupProps {
  classOverride?: string;
}
export const DropdownMenuRadioGroup: React.FC<DropdownMenuRadioGroupProps> = ({
  className,
  classOverride,
  ...props
}) => {
  const classNames = classOverride ?? classnames('adiago-dropdown-radio-group', className);

  return <RadixDropdown.RadioGroup {...props} className={classNames} />;
};
DropdownMenuRadioGroup.displayName = 'DropdownMenuRadioGroup';

// Radio Item
export interface DropdownMenuRadioItemProps extends RadixDropdownMenuRadioItemProps {
  classOverride?: string;
}
export const DropdownMenuRadioItem: React.FC<DropdownMenuRadioItemProps> = ({ className, classOverride, ...props }) => {
  const classNames = classOverride ?? classnames('adiago-dropdown-radio-item', className);

  return <RadixDropdown.RadioItem {...props} className={classNames} />;
};
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

// Item Indicator
export interface DropdownMenuItemIndicatorProps extends RadixDropdownMenuItemIndicatorProps {
  classOverride?: string;
}
export const DropdownMenuItemIndicator: React.FC<DropdownMenuItemIndicatorProps> = ({
  className,
  classOverride,
  ...props
}) => {
  const classNames = classOverride ?? classnames('adiago-dropdown-item-indicator', className);

  return <RadixDropdown.ItemIndicator {...props} className={classNames} />;
};
DropdownMenuItemIndicator.displayName = 'DropdownMenuItemIndicator';

// Label
export interface DropdownMenuLabelProps extends RadixDropdownMenuLabelProps {
  classOverride?: string;
}
export const DropdownMenuLabel: React.FC<DropdownMenuLabelProps> = ({ className, classOverride, ...props }) => {
  const classNames = classOverride ?? classnames('adiago-dropdown-label', className);

  return <RadixDropdown.Label {...props} className={classNames} />;
};
DropdownMenuLabel.displayName = 'DropdownMenuLabel';

// Separator
export interface DropdownMenuSeparatorProps extends RadixDropdownMenuSeparatorProps {
  classOverride?: string;
}
export const DropdownMenuSeparator: React.FC<DropdownMenuSeparatorProps> = ({ className, classOverride, ...props }) => {
  const classNames = classOverride ?? classnames('adiago-dropdown-separator', className);

  return <RadixDropdown.Separator {...props} className={classNames} />;
};
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

// SubTrigger
export interface DropdownMenuSubTriggerProps extends RadixDropdownMenuSubTriggerProps {
  classOverride?: string;
}
export const DropdownMenuSubTrigger: React.FC<DropdownMenuSubTriggerProps> = ({
  className,
  classOverride,
  ...props
}) => {
  const classNames = classOverride ?? classnames('adiago-dropdown-sub-trigger', className);

  return <RadixDropdown.SubTrigger {...props} className={classNames} />;
};
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';

// SubContent
export interface DropdownMenuSubContentProps extends RadixDropdownMenuSubContentProps {
  classOverride?: string;
}
export const DropdownMenuSubContent: React.FC<DropdownMenuSubContentProps> = ({
  className,
  classOverride,
  ...props
}) => {
  const classNames = classOverride ?? classnames('adiago-dropdown-sub-content', className);

  return <RadixDropdown.SubContent {...props} className={classNames} />;
};
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent';
