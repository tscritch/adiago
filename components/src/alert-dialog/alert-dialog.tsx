import React from 'react';
import classnames from 'classnames';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import { AlertDialogContentProps as RadixAlertDialogContentProps } from '@radix-ui/react-alert-dialog';

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
  const classNames = classOverride ?? classnames('adiago-alert-dialog-content', className);

  const overlayClassNames = overlayClassOverride ?? classnames('adiago-alert-dialog-overlay', overlayClassName);

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
