import React from 'react';
import classnames from 'classnames';
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import {
  ToggleGroupSingleProps as RadixToggleGroupProps,
  ToggleGroupItemProps as RadixToggleGroupItemProps
} from '@radix-ui/react-toggle-group';

export type ToggleGroupProps = Omit<RadixToggleGroupProps, 'type'>;

const rootClassnames = classnames(
  'adiago-toggle-group',
  'inline-flex bg-neutral-100 shadow-inner rounded p-[2px] space-x-[2px] dark:bg-neutral-700'
);

export const ToggleGroupRoot: React.FC<ToggleGroupProps> = (props) => {
  return <RadixToggleGroup.Root {...props} type="single" className={rootClassnames} />;
};

ToggleGroupRoot.displayName = 'ToggleGroupRoot';

export type ToggleGroupItemProps = RadixToggleGroupItemProps;

const itemClassnames = classnames(
  'adiago-toggle-group-item',
  'px-2 py-1 flex items-center justify-center rounded text-xs text-neutral-900 bg-neutral-100 focus:outline focus:outline-leaf-500 rx-state-on:bg-white rx-state-on:shadow hover:bg-neutral-200 dark:focus:outline-leaf-600 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:rx-state-on:bg-neutral-900'
);

export const ToggleGroupItem: React.FC<ToggleGroupItemProps> = (props) => {
  return <RadixToggleGroup.Item {...props} className={itemClassnames} />;
};

ToggleGroupRoot.displayName = 'ToggleGroupRoot';
