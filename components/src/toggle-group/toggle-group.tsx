import React from 'react';
import classnames from 'classnames';
import * as RadixSwitch from '@radix-ui/react-switch';
import { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';
import { Label } from '../label';

export type SwitchProps = RadixSwitchProps & {
  label?: string;
};

const rootClassnames = classnames(
  'adiago-switch',
  'overflow-hidden h-6 w-10 rounded-full bg-neutral-200 transition-all shadow-inner border-2 border-transparent rx-state-checked:bg-leaf-500 focus:outline-none focus:border-leaf-500 dark:rx-state-checked:bg-leaf-500 dark:bg-neutral-700 dark:border-neutral-700'
);

const thumbClassnames = classnames(
  'adiago-switch-thumb',
  'block bg-white rounded-full h-4 w-4 shadow translate-x-[2px] transition-transform duration-200 ease-in-out rx-state-checked:translate-x-[18px]'
);

export const ToggleGroupRoot: React.FC<SwitchProps> = ({ label, ...props }) => {
  return (
    <div className="flex items-center py-1">
      <RadixSwitch.Root {...props} className={rootClassnames}>
        <RadixSwitch.Thumb className={thumbClassnames} />
      </RadixSwitch.Root>
      {label && (
        <Label className="pl-2 pt-1" htmlFor={props.id}>
          {label}
        </Label>
      )}
    </div>
  );
};

ToggleGroupRoot.displayName = 'ToggleGroupRoot';
