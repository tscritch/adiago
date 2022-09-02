import React from 'react';
import classnames from 'classnames';
import * as RadixSelect from '@radix-ui/react-select';
import {
  SelectTriggerProps as RadixSelectTriggerProps,
  SelectValueProps as RadixSelectValueProps,
  SelectIconProps as RadixSelectIconProps,
  SelectContentProps as RadixSelectContentProps,
  SelectViewportProps as RadixSelectViewportProps,
  SelectGroupProps as RadixSelectGroupProps,
  SelectItemProps as RadixSelectItemProps,
  SelectItemTextProps as RadixSelectItemTextProps,
  SelectItemIndicatorProps as RadixSelectItemIndicatorProps,
  SelectLabelProps as RadixSelectLabelProps,
  SelectSeparatorProps as RadixSelectSeparatorProps,
  SelectScrollUpButtonProps as RadixSelectScrollUpButtonProps,
  SelectScrollDownButtonProps as RadixSelectScrollDownButtonProps
} from '@radix-ui/react-select';

export const SelectRoot = RadixSelect.Root;

export interface SelectTriggerProps extends RadixSelectTriggerProps {
  classOverride?: string;
}
export const SelectTrigger: React.FC<SelectTriggerProps> = ({ className, classOverride, ...props }) => {
  const classNames = classOverride ?? classnames('adiago-select-trigger', className);

  return <RadixSelect.Trigger {...props} className={classNames} />;
};

SelectTrigger.displayName = 'SelectTrigger';
