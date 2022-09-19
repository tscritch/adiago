import React from 'react';
import classnames from 'classnames';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';
import { CheckIcon } from '@heroicons/react/24/solid';

const rootClassnames = classnames(
  'adiago-checkbox',
  'unset h-6 w-6 rounded flex items-center justify-center bg-white text-neutral-900 border border-neutral-200 shadow-sm hover:bg-leaf-50 focus:border-2 focus:border-leaf-500 dark:bg-neutral-900 dark:text-white dark:border-neutral-700 rx-state-checked:bg-leaf-100'
);
const indicatorClassnames = classnames('adiago-checkbox-indicator', 'w-3 h-3 stroke-2 stroke-leaf-600 fill-leaf-600');

export type CheckboxProps = RadixCheckboxProps;

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <RadixCheckbox.Root {...props} className={rootClassnames}>
      <RadixCheckbox.Indicator>
        <CheckIcon className={indicatorClassnames} />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};

Checkbox.displayName = 'Checkbox';
