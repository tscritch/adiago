import React from 'react';

export type IToastType = 'success' | 'error' | 'warning' | 'info';
export interface IToast {
  open: boolean;
  type: IToastType;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export type IToastStateCreateToast = (toast: Omit<IToast, 'open'>) => void;

export interface IToastState {
  toasts: IToast[];
}

// @robustness the toggling and removal of the toast is not stable
// and should be improved
export const useToastState = () => {
  const [toasts, setToasts] = React.useState<IToast[]>([]);

  const toggleToast = (index: number, open: boolean) => {
    const toast = toasts[index];
    if (toast.open === open) return;
    const newToast = { ...toasts[index], open: open };
    const newToasts = [...toasts];
    newToasts[index] = newToast;
    setToasts(newToasts);

    // after the toast closes, remove toast from state after 1 second
    if (!open) {
      setTimeout(() => {
        removeToast(index);
      }, 150);
    }
  };

  const createToast = React.useCallback(
    (toast: Omit<IToast, 'open'>) => {
      const newToast = { ...toast, open: true };
      setToasts([...toasts, newToast]);
    },
    [toasts]
  );

  const removeToast = (index: number) => {
    setToasts(toasts.filter((_, i) => i !== index));
  };

  return {
    toasts,
    toggleToast,
    createToast,
    removeToast
  };
};

export interface IToastContext {
  createToast: IToastStateCreateToast;
}
const initialToastContext: IToastContext = {
  createToast: () => {}
};
export const ToastStateContext = React.createContext<IToastContext>(initialToastContext);

export const useToast = () => React.useContext(ToastStateContext);
