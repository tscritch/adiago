import React from 'react';
import classnames from 'classnames';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import {
  AlertDialogContentProps as RadixAlertDialogContentProps,
  AlertDialogTitleProps as RadixAlertDialogTitleProps,
  AlertDialogDescriptionProps as RadixAlertDialogDescriptionProps
} from '@radix-ui/react-alert-dialog';

export const AlertDialogRoot = RadixAlertDialog.Root;
export const AlertDialogTrigger = RadixAlertDialog.Trigger;
export const AlertDialogAction = RadixAlertDialog.Action;
export const AlertDialogCancel = RadixAlertDialog.Cancel;

export interface AlertDialogContentProps extends RadixAlertDialogContentProps {
  classOverride?: string;
  overlayClassName?: string;
  overlayClassOverride?: string;
}
export const AlertDialogContent: React.FC<AlertDialogContentProps> = ({
  className,
  classOverride,
  overlayClassName,
  overlayClassOverride,
  ...props
}) => {
  const classNames =
    classOverride ??
    classnames(
      'adiago-alert-dialog-content fixed p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg max-h-[85vh] bg-white shadow-lg rounded dark:bg-neutral-900',
      className
    );

  const overlayClassNames =
    overlayClassOverride ??
    classnames(
      'adiago-alert-dialog-overlay fixed inset-0 bg-black opacity-40 motion-safe:transition-opacity motion-safe:duration-75 dark:bg-neutral-600',
      overlayClassName
    );

  return (
    <RadixAlertDialog.Portal>
      <>
        <RadixAlertDialog.Overlay className={overlayClassNames} />
        <RadixAlertDialog.Content {...props} className={classNames} />;
      </>
    </RadixAlertDialog.Portal>
  );
};

AlertDialogContent.displayName = 'AlertDialogContent';

export interface AlertDialogTitleProps extends RadixAlertDialogTitleProps {
  classOverride?: string;
}
export const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({ className, classOverride, ...props }) => {
  const classNames =
    classOverride ??
    classnames('adiago-alert-dialog-title font-bold text-base text-neutral-900 dark:text-white', className);

  return <RadixAlertDialog.Title {...props} className={classNames} />;
};

AlertDialogTitle.displayName = 'AlertDialogTitle';

export interface AlertDialogDescriptionProps extends RadixAlertDialogDescriptionProps {
  classOverride?: string;
}
export const AlertDialogDescription: React.FC<AlertDialogDescriptionProps> = ({
  className,
  classOverride,
  ...props
}) => {
  const classNames =
    classOverride ??
    classnames('adiago-alert-dialog-title pt-1 text-sm text-neutral-600 dark:text-neutral-200', className);

  return <RadixAlertDialog.Title {...props} className={classNames} />;
};

AlertDialogDescription.displayName = 'AlertDialogDescription';

export interface AlertDialogButtonGroupProps {
  className?: string;
  classOverride?: string;
  children: React.ReactNode;
}
export const AlertDialogButtonGroup: React.FC<AlertDialogButtonGroupProps> = ({
  className,
  classOverride,
  children
}) => {
  const classNames =
    classOverride ?? classnames('adiago-alert-dialog-button-group pt-8 flex justify-end space-x-2', className);

  return <div className={classNames}>{children}</div>;
};

AlertDialogButtonGroup.displayName = 'AlertDialogButtonGroup';
