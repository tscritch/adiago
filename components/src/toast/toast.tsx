// reference https://www.radix-ui.com/docs/primitives/components/dropdown-menu

import React from 'react';
import classnames from 'classnames';
import * as RadixToast from '@radix-ui/react-toast';
import {
  ToastViewportProps as RadixToastViewportProps,
  ToastProps as RadixToastRootProps,
  ToastTitleProps as RadixToastTitleProps,
  ToastDescriptionProps as RadixToastDescriptionProps,
  ToastActionProps as RadixToastActionProps,
  ToastCloseProps as RadixToastCloseProps
} from '@radix-ui/react-toast';

export const ToastProvider = RadixToast.Provider;

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
export type ToastRootProps = RadixToastRootProps & {
  classOverride?: string;
};
export const ToastRoot: React.FC<ToastRootProps> = ({ className, classOverride, ...props }) => {
  const classNames =
    classOverride ??
    classnames('adiago-toast-root bg-white rounded shadow-md p-3 grid items-center dark:bg-neutral-900', className);

  return <RadixToast.Root className={classNames} {...props} />;
};
ToastRoot.displayName = 'ToastRoot';

// Title
export type ToastTitleProps = RadixToastTitleProps & {
  classOverride?: string;
};
export const ToastTitle: React.FC<ToastTitleProps> = ({ className, classOverride, ...props }) => {
  const classNames =
    classOverride ?? classnames('adiago-toast-title text-neutral-900 font-semibold dark:text-white', className);

  return <RadixToast.Title className={classNames} {...props} />;
};
ToastTitle.displayName = 'ToastTitle';

// Description
export type ToastDescriptionProps = RadixToastDescriptionProps & {
  classOverride?: string;
};
export const ToastDescription: React.FC<ToastDescriptionProps> = ({ className, classOverride, ...props }) => {
  const classNames =
    classOverride ??
    classnames('adiago-toast-description text-neutral-700 font-semibold dark:text-neutral-200', className);

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
  const classNames = classOverride ?? classnames('adiago-toast-cancel', className);

  return <RadixToast.Close className={classNames} {...props} />;
};
ToastClose.displayName = 'ToastClose';
