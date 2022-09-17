import React from 'react';
import classnames from 'classnames';
import './button.css';

type ReducedHTMLButtonElement = Omit<React.HTMLProps<HTMLButtonElement>, 'size'>;

export type TButtonColors = 'primary' | 'secondary' | 'strong' | 'error' | 'opaque';
export type TButtonShapes = 'rect' | 'pill' | 'circle';
export type TButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TButtonVariants = 'standard' | 'outline' | 'flat' | 'transparent';

export interface ButtonProps extends ReducedHTMLButtonElement {
  children?: React.ReactNode;
  /**
   * Color: primary, secondary, error, white
   */
  color?: TButtonColors;
  /**
   * Shape: rect, pill, circle
   */
  shape?: TButtonShapes;
  /**
   * Size: xs, sm, md, lg, xl
   */
  size?: TButtonSizes;
  type?: 'button' | 'submit' | 'reset';
  /**
   * Variant: standard, outline, flat, transparent
   */
  variant?: TButtonVariants;
  /**
   * Icon: if provided will ignore children and adjust button sizes
   */
  icon?: React.ReactNode;
}

const baseClasses =
  'adiago-button font-semibold transition-all duration-75 focus-visible:outline-leaf-500 flex items-center justify-center space-x-2';
const colorClasses: Record<TButtonVariants, Record<TButtonColors, string>> = {
  standard: {
    primary: 'bg-leaf-500 text-white drop-shadow-leaf hover:bg-leaf-600 dark:bg-leaf-600 dark:hover:bg-leaf-700',
    secondary: 'bg-blue-500 text-white drop-shadow-blue hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700',
    strong:
      'bg-djent-500 text-white drop-shadow-djent hover:bg-djent-700 dark:bg-djent-100 dark:text-djent-600 dark:hover:bg-djent-200',
    error: 'bg-red-500 text-white drop-shadow-red hover:bg-red-600',
    opaque:
      'bg-white text-neutral-800 drop-shadow hover:bg-neutral-50 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-800'
  },
  outline: {
    primary:
      'bg-transparent text-leaf-500 border border-leaf-500 hover:bg-leaf-50 dark:text-leaf-300 dark:border-leaf-300 dark:hover:bg-leaf-900',
    secondary:
      'bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-50 dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-900',
    strong:
      'bg-transparent text-djent-500 border border-djent-500 hover:bg-djent-50 dark:text-djent-50 dark:border-djent-50 dark:hover:bg-djent-600',
    error:
      'bg-transparent text-red-500 border border-red-500 hover:bg-red-50 dark:text-red-300 dark:border-red-300 dark:hover:bg-red-900',
    opaque:
      'bg-transparent text-neutral-800 border border-neutral-500 hover:bg-neutral-50 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700'
  },
  flat: {
    primary: 'bg-leaf-100 text-leaf-600 hover:bg-leaf-200',
    secondary: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
    strong:
      'bg-djent-100 text-djent-800 hover:bg-djent-200 dark:bg-djent-500 dark:text-djent-50 dark:hover:bg-djent-600',
    error: 'bg-red-100 text-red-600 hover:bg-red-200',
    opaque:
      'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700'
  },
  transparent: {
    primary: 'bg-transparent text-leaf-500 hover:bg-leaf-100 dark:hover:bg-leaf-900',
    secondary: 'bg-transparent text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900',
    strong: 'bg-transparent text-djent-500 hover:bg-djent-100 dark:text-djent-50 dark:hover:bg-djent-400',
    error: 'bg-transparent text-red-500 hover:bg-red-100 dark:hover:bg-red-900',
    opaque:
      'bg-transparent text-neutral-800 hover:bg-neutral-100 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600'
  }
};
const shapeClasses: Record<TButtonShapes, string> = {
  rect: 'rounded',
  pill: 'rounded-full',
  circle: 'rounded-full'
};
const sizeClasses: Record<TButtonShapes, Record<TButtonSizes, string>> = {
  rect: {
    xs: 'px-1.5 py-1 text-xs',
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-1.5 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl font-bold'
  },
  pill: {
    xs: 'px-3.5 py-1 text-xs',
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-6 py-2.5 text-lg',
    xl: 'px-8 py-3 text-xl font-bold'
  },
  circle: {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-14 h-14 text-xl font-bold'
  }
};
const iconSizeClasses: Record<TButtonShapes, Partial<Record<TButtonSizes, string>>> = {
  rect: {
    xs: 'w-6 h-6 p-0 text-xs',
    sm: 'w-8 h-8 p-0 text-sm',
    md: 'w-10 h-10 p-0 text-base',
    lg: 'w-12 h-12 p-0 text-lg',
    xl: 'w-14 h-14 p-0 text-xl font-bold'
  },
  pill: {
    xs: 'w-8 h-6 text-xs',
    sm: 'w-10 h-8 text-sm',
    md: 'w-12 h-10 text-base',
    lg: 'w-14 h-12 text-lg',
    xl: 'w-16 h-14 text-xl font-bold'
  },
  circle: {}
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'standard', color = 'primary', size = 'md', shape = 'rect', icon, children, className, ...props },
    ref
  ) => {
    const classNames = classnames(
      baseClasses,
      colorClasses[variant][color],
      shapeClasses[shape],
      sizeClasses[shape][size],
      icon && iconSizeClasses[shape][size],
      className
    );

    return (
      <button className={classNames} ref={ref} {...props}>
        {icon || children}
      </button>
    );
  }
);

Button.displayName = 'Button';
