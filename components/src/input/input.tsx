import React from 'react';
import classnames from 'classnames';
import { Label } from '../label';
import { Loader } from '../loader';

export type TInputVariants = 'standard' | 'invisible';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  variant?: TInputVariants;
  loading?: boolean;
}

const baseClasses = classnames(
  'adiago-input',
  'z-0 text-neutral-900 p-2 text-xs rounded w-full transition-all duration-75 dark:text-white'
);
const variantClasses: Record<TInputVariants, string> = {
  standard:
    'bg-neutral-50 border border-neutral-300 outline-leaf-400 drop-shadow dark:bg-neutral-800 dark:border-neutral-700',
  invisible: 'bg-transparent outline-none focus:bg-neutral-900/5 dark:focus:bg-neutral-50/5'
};

const iconClasses = 'absolute left-2 top-2 first:w-4 first:h-4 z-10 first:text-neutral-500';

export const Input: React.FC<InputProps> = ({ /*icon,*/ label, variant = 'standard', icon, loading, ...props }) => {
  const classNames = classnames(baseClasses, variantClasses[variant], icon && 'pl-7', loading && 'pr-7');

  return (
    <div className="adiago-input-container pb-2 relative z-0">
      {icon ? <div className={iconClasses}>{icon}</div> : null}
      {label && (
        <Label htmlFor={props.id} className="pb-1 block text-xs">
          {label}
        </Label>
      )}
      <input type="text" className={classNames} {...props} />

      {loading && (
        <div className="absolute right-2 top-2">
          <Loader size="sm" />
        </div>
      )}
    </div>
  );
};

Input.displayName = 'Input';
