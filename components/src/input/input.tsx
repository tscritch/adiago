import React from 'react';
import classnames from 'classnames';

type TInputVariants = 'standard' | 'invisible';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  icon?: string;
  variant?: TInputVariants;
}

const baseClasses =
  'adiago-input text-neutral-900 p-2 text-xs rounded width-full transition-all duration-75 dark:text-white';
const variantClasses: Record<TInputVariants, string> = {
  standard:
    'bg-neutral-50 border border-neutral-300 outline-leaf-400 drop-shadow dark:bg-neutral-800 dark:border-neutral-700',
  invisible: 'bg-transparent outline-none focus:bg-neutral-900/5 dark:focus:bg-neutral-50/5'
};

export const Input: React.FC<InputProps> = ({ icon, label, variant = 'standard', ...props }) => {
  const classNames = classnames(baseClasses, variantClasses[variant]);

  return (
    <div className="adiago-input-container pb-2 relative">
      {/* @todo make own component and use radix ui label: https://www.radix-ui.com/docs/primitives/components/label */}
      {label && (
        <label className="adiago-input-label text-xs block pb-1 font-semibold" htmlFor={props.name}>
          {label}
        </label>
      )}
      <input type="text" className={classNames} {...props} />
    </div>
  );
};

Input.displayName = 'Input';
