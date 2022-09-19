// reference https://www.radix-ui.com/docs/primitives/components/dropdown-menu

import React from 'react';
import classnames from 'classnames';
import * as RadixToast from '@radix-ui/react-toast';
import {
  ToastProviderProps as RadixToastProviderProps,
  ToastViewportProps as RadixToastViewportProps,
  ToastProps as RadixToastRootProps,
  ToastTitleProps as RadixToastTitleProps,
  ToastDescriptionProps as RadixToastDescriptionProps,
  ToastActionProps as RadixToastActionProps,
  ToastCloseProps as RadixToastCloseProps
} from '@radix-ui/react-toast';
import './toast.css';
import { IToastType, ToastStateContext, useToastState } from './toast-state';
import { Button } from '../button';

export type ToastProviderProps = RadixToastProviderProps;

export const ToastProvider: React.FC<ToastProviderProps> = ({ children, ...props }) => {
  const { toasts, toggleToast, createToast } = useToastState();

  const wrappedChildren = React.useMemo(
    () => <ToastStateContext.Provider value={{ createToast }}>{children}</ToastStateContext.Provider>,
    []
    // [createToast]
  );

  const toastElements = React.useMemo(
    () =>
      toasts.map((toast, i) => {
        return <Toast key={`adiago-toast-${i}`} {...toast} onOpenChange={(open) => toggleToast(i, open)} />;
      }),
    [toasts]
  );

  return (
    <RadixToast.Provider {...props}>
      {wrappedChildren}

      {toastElements}

      <ToastViewport />
    </RadixToast.Provider>
  );
};

ToastProvider.displayName = 'ToastProvider';

export interface ToastProps {
  title: string;
  description: string;
  type: IToastType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}
// @todo add type color variants maybe with an icon as well
export const Toast: React.FC<ToastProps> = ({ title, description, open, onOpenChange, action }) => {
  return (
    <ToastRoot open={open} onOpenChange={onOpenChange}>
      <ToastTitle>{title}</ToastTitle>
      <ToastDescription>{description}</ToastDescription>
      {action ? (
        <ToastAction altText={action.label}>
          <Button
            size="xs"
            variant="transparent"
            onClick={() => {
              action.onClick();
              onOpenChange(open);
            }}>
            {action.label}
          </Button>
        </ToastAction>
      ) : null}
    </ToastRoot>
  );
};

// Viewport
export type ToastViewportProps = RadixToastViewportProps & {
  classOverride?: string;
};
export const ToastViewport: React.FC<ToastViewportProps> = ({ className, classOverride, ...props }) => {
  const classNames =
    classOverride ??
    classnames(
      'adiago-toast-viewport fixed bottom-0 right-0 flex flex-col p-6 gap-2 max-w-screen m-0 list-none outline-none z-50',
      className
    );

  return <RadixToast.Viewport className={classNames} {...props} />;
};
ToastViewport.displayName = 'ToastViewport';

// Root
const animationClassNames = classnames(
  'rx-state-open:animate-slide-in rx-state-closed:animate-hide rx-swipe-move:translate-x-[var(--radix-toast-swipe-move-x)] rx-swipe-cancel:translate-x-0 rx-swipe-cancel:transition-transform rx-swipe-end:animate-swipe-out'
);
export type ToastRootProps = RadixToastRootProps & {
  classOverride?: string;
};
export const ToastRoot: React.FC<ToastRootProps> = ({ className, classOverride, ...props }) => {
  const classNames =
    classOverride ??
    classnames(
      'adiago-toast-root w-72 bg-white rounded shadow-lg p-2 border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-700',
      animationClassNames,
      className
    );

  return <RadixToast.Root className={classNames} {...props} />;
};
ToastRoot.displayName = 'ToastRoot';

// Title
export type ToastTitleProps = RadixToastTitleProps & {
  classOverride?: string;
};
export const ToastTitle: React.FC<ToastTitleProps> = ({ className, classOverride, ...props }) => {
  const classNames =
    classOverride ?? classnames('adiago-toast-title text-neutral-900 font-semibold text-sm dark:text-white', className);

  return <RadixToast.Title className={classNames} {...props} />;
};
ToastTitle.displayName = 'ToastTitle';

// Description
export type ToastDescriptionProps = RadixToastDescriptionProps & {
  classOverride?: string;
};
export const ToastDescription: React.FC<ToastDescriptionProps> = ({ className, classOverride, ...props }) => {
  const classNames =
    classOverride ?? classnames('adiago-toast-description text-neutral-700 text-xs dark:text-neutral-200', className);

  return <RadixToast.Description className={classNames} {...props} />;
};
ToastDescription.displayName = 'ToastDescription';

// Action
export type ToastActionProps = RadixToastActionProps & {
  classOverride?: string;
};
export const ToastAction: React.FC<ToastActionProps> = ({ className, classOverride, ...props }) => {
  const classNames = classOverride ?? classnames('adiago-toast-action', className);

  return <RadixToast.Action className={classNames} {...props} />;
};
ToastAction.displayName = 'ToastAction';

// Cancel
export type ToastCloseProps = RadixToastCloseProps & {
  classOverride?: string;
};
export const ToastClose: React.FC<ToastCloseProps> = ({ className, classOverride, ...props }) => {
  const classNames = classOverride ?? classnames('adiago-toast-close', className);

  return <RadixToast.Close className={classNames} {...props} />;
};
ToastClose.displayName = 'ToastClose';
