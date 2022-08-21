import React from 'react';
import classnames from 'classnames';
import * as RadixScrollArea from '@radix-ui/react-scroll-area';

interface ScrollAreaProps {
  children?: React.ReactNode;
  className?: string;
}

export const ScrollAreaVertical: React.FC<ScrollAreaProps> = ({ children, className }) => {
  const classNames = classnames('adiago-sidebar-content overflow-hidden', className);

  return (
    <RadixScrollArea.Root className={classNames}>
      <RadixScrollArea.Viewport className="w-full h-full">{children}</RadixScrollArea.Viewport>
      <RadixScrollArea.Scrollbar
        orientation="vertical"
        className="flex select-none touch-none p-[0.5] bg-neutral-200 transition-all w-2 rounded-full">
        <RadixScrollArea.Thumb className="flex-1 bg-neutral-400 rounded-full" />
      </RadixScrollArea.Scrollbar>
    </RadixScrollArea.Root>
  );
};

ScrollAreaVertical.displayName = 'ScrollAreaVertical';
