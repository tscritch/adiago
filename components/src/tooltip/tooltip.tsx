import React from 'react';
import classnames from 'classnames';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import {
  TooltipProps as RadixTooltipProps,
  TooltipTriggerProps as RadixTooltipTriggerProps,
  TooltipContentProps as RadixTooltipContentProps
} from '@radix-ui/react-tooltip';

export const TooltipProvider = RadixTooltip.Provider;

export type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  rootProps?: RadixTooltipProps;
  triggerProps?: RadixTooltipTriggerProps;
  contentProps?: RadixTooltipContentProps;
};

const contentClassnames = classnames(
  'adiago-tooltip-content',
  'z-0 rounded px-2 py-1 text-sm bg-white text-neutral-900 shadow-lg border border-neutral-100 dark:bg-neutral-900 dark:text-white dark:border-neutral-700'
);
const arrowClassnames = classnames(
  'adiago-tooltip-arrow',
  '-translate-y-[1px] z-10 fill-white stroke-neutral-100 dark:fill-neutral-900 dark:stroke-neutral-700'
);

export const Tooltip: React.FC<TooltipProps> = ({ children, content, rootProps, triggerProps, contentProps }) => {
  return (
    <RadixTooltip.Root {...rootProps}>
      <RadixTooltip.Trigger {...triggerProps}>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content sideOffset={6} {...contentProps} className={contentClassnames}>
          {content}
          <RadixTooltip.Arrow className={arrowClassnames} />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};

Tooltip.displayName = 'Tooltip';
