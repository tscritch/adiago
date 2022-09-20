import React from 'react';
import classnames from 'classnames';
import * as RadixLabel from '@radix-ui/react-label';
import { LabelProps as RadixLabelProps } from '@radix-ui/react-label';

export type LabelProps = RadixLabelProps & {
  classOverride?: string;
};

export const Label: React.FC<LabelProps> = ({ classOverride, className, ...props }) => {
  const classNames =
    classOverride ?? classnames('adiago-label', 'text-sm select-none text-neutral-700 dark:text-white', className);

  return <RadixLabel.Root {...props} className={classNames} />;
};

Label.displayName = 'Label';
