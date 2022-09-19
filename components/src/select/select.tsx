import React from 'react';
import classnames from 'classnames';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/solid';
import * as RadixSelect from '@radix-ui/react-select';
import {
  SelectTriggerProps as RadixSelectTriggerProps,
  // SelectValueProps as RadixSelectValueProps,
  // SelectIconProps as RadixSelectIconProps,
  SelectContentProps as RadixSelectContentProps,
  SelectViewportProps as RadixSelectViewportProps,
  // SelectGroupProps as RadixSelectGroupProps,
  SelectItemProps as RadixSelectItemProps,
  // SelectItemTextProps as RadixSelectItemTextProps,
  // SelectItemIndicatorProps as RadixSelectItemIndicatorProps,
  SelectLabelProps as RadixSelectLabelProps,
  SelectSeparatorProps as RadixSelectSeparatorProps
  // SelectScrollUpButtonProps as RadixSelectScrollUpButtonProps,
  // SelectScrollDownButtonProps as RadixSelectScrollDownButtonProps
} from '@radix-ui/react-select';

export const SelectRoot = RadixSelect.Root;
export const SelectValue = RadixSelect.Value;
export const SelectIcon = RadixSelect.Icon;
export const SelectGroup = RadixSelect.Group;
export const SelectItemText = RadixSelect.ItemText;

export interface SelectTriggerProps extends RadixSelectTriggerProps {
  classOverride?: string;
  iconOverride?: React.ReactNode;
  iconClassNameOverride?: string;
  placeholder?: string;
}
export const SelectTrigger: React.FC<SelectTriggerProps> = ({
  className,
  classOverride,
  iconOverride,
  iconClassNameOverride,
  placeholder,
  ...props
}) => {
  const classNames =
    classOverride ??
    classnames(
      'adiago-select-trigger px-2 py-1 flex items-center justify-between space-x-2 min-w-[4rem] text-sm rounded shadow-sm border border-neutral-300 bg-white focus-visible:outline-leaf-600 dark:bg-neutral-700 dark:text-white dark:border-neutral-700',
      className
    );

  const iconClassNames =
    iconClassNameOverride ?? classnames('adiago-select-icon w-4 text-neutral-800 dark:text-white', className);

  return (
    <RadixSelect.Trigger {...props} className={classNames}>
      <SelectValue placeholder={placeholder || 'Select...'} />
      <RadixSelect.SelectIcon className={iconClassNames}>{iconOverride ?? <ChevronDownIcon />}</RadixSelect.SelectIcon>
    </RadixSelect.Trigger>
  );
};

SelectTrigger.displayName = 'SelectTrigger';

export interface SelectContentProps extends RadixSelectContentProps {
  classOverride?: string;
}
export const SelectContent: React.FC<SelectContentProps> = ({ className, classOverride, ...props }) => {
  const classNames =
    classOverride ??
    classnames(
      'adiago-select-content overflow-hidden rounded shadow-md border border-neutral-200 bg-white dark:bg-neutral-900 dark:text-white dark:border-neutral-700',
      className
    );

  return (
    <RadixSelect.Portal>
      <>
        <RadixSelect.Content {...props} className={classNames} />
      </>
    </RadixSelect.Portal>
  );
};

SelectContent.displayName = 'SelectContent';

export interface SelectViewportProps extends RadixSelectViewportProps {
  classOverride?: string;
}
export const SelectViewport: React.FC<SelectViewportProps> = ({ className, classOverride, ...props }) => {
  const classNames = classOverride ?? classnames('adiago-select-viewport p-1', className);

  return <RadixSelect.Viewport {...props} className={classNames} />;
};

SelectViewport.displayName = 'SelectViewport';

export interface SelectItemProps extends RadixSelectItemProps {
  classOverride?: string;
  iconOverride?: React.ReactNode;
}
export const SelectItem: React.FC<SelectItemProps> = ({
  children,
  className,
  classOverride,
  iconOverride,
  ...props
}) => {
  const classNames =
    classOverride ??
    classnames(
      'adiago-select-item py-1 pl-6 pr-8 flex items-center relative text-sm rounded-sm transition duration-75 text-leaf-900 cursor-pointer hover:outline-none hover:bg-leaf-200 hover:text-leaf-900 rx-disabled:text-neutral-300 rx-disabled:pointer-events-none dark:text-white dark:hover:bg-djent-600 dark:hover:text-leaf-100 dark:rx-disabled:text-neutral-500',
      className
    );

  return (
    <RadixSelect.Item {...props} className={classNames}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="absolute top-1.5 left-1.5 w-3">
        {iconOverride ?? <CheckIcon />}
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  );
};

SelectItem.displayName = 'SelectItem';

export interface SelectLabelProps extends RadixSelectLabelProps {
  classOverride?: string;
}
export const SelectLabel: React.FC<SelectLabelProps> = ({ className, classOverride, ...props }) => {
  const classNames =
    classOverride ??
    classnames('adiago-select-label py-1 px-6 text-xs text-neutral-500 dark:text-neutral-400', className);

  return <RadixSelect.Label {...props} className={classNames} />;
};

SelectLabel.displayName = 'SelectLabel';

export interface SelectSeparatorProps extends RadixSelectSeparatorProps {
  classOverride?: string;
  iconOverride?: React.ReactNode;
}
export const SelectSeparator = React.forwardRef<React.ElementRef<typeof RadixSelect.Label>, SelectSeparatorProps>(
  ({ className, classOverride, ...props }, forwardedRef) => {
    const classNames =
      classOverride ?? classnames('adiago-select-separator h-[1px] m-1 bg-neutral-300 dark:bg-neutral-600', className);

    return <RadixSelect.Separator {...props} className={classNames} ref={forwardedRef} />;
  }
);

SelectSeparator.displayName = 'SelectSeparator';
