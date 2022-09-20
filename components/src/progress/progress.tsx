import React from 'react';
import classnames from 'classnames';
import * as RadixProgress from '@radix-ui/react-progress';
import { ProgressProps as RadixProgressProps } from '@radix-ui/react-progress';

export type ProgressProps = RadixProgressProps;

const rootClassnames = classnames(
  'adiago-progress',
  'translate-z relative overflow-hidden h-1 w-full rounded-full bg-neutral-200 dark:bg-neutral-700'
);

const indicatorClassnames = classnames(
  'adiago-progress-indicator',
  'bg-leaf-500 w-full h-full rounded-full transition-all'
);

export const Progress: React.FC<ProgressProps> = (props) => {
  return (
    <RadixProgress.Root {...props} className={rootClassnames}>
      <RadixProgress.Indicator
        className={indicatorClassnames}
        style={{ transform: `translateX(-${100 - (props.value || 100)}%)` }}
      />
    </RadixProgress.Root>
  );
};

Progress.displayName = 'Progress';
