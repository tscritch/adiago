import React from 'react';
import classnames from 'classnames';

type ReducedHTMLButtonElement = Omit<React.HTMLProps<HTMLButtonElement>, 'size'>;

type TButtonColors = 'primary' | 'secondary' | 'strong' | 'error' | 'opaque';
type TButtonShapes = 'rect' | 'circle';
type TButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type TButtonVariants = 'standard' | 'outline' | 'flat' | 'transparent';

export interface ButtonProps extends ReducedHTMLButtonElement {
  children: React.ReactNode;
  /**
   * Color: primary, secondary, error, white
   */
  color?: TButtonColors;
  /**
   * Shape: rect, circle
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
}

const baseClasses = 'adiago-button';
const colorClasses: Record<TButtonColors, string> = {
  primary: 'bg-leaf-500',
  secondary: 'bg-blue-500',
  strong: 'bg-djent-500',
  error: 'bg-red-500',
  opaque: 'bg-white text-neutral-800 dark:bg-neutral-800 dark:text-white'
};
const variantClasses: Record<TButtonVariants, string> = {
  standard: 'drop-shadow',
  outline: '',
  flat: '',
  transparent: ''
};
const shapeClasses: Record<TButtonShapes, string> = {
  rect: 'rounded',
  circle: 'rounded-full'
};
const sizeClasses: Record<TButtonSizes, string> = {
  xs: 'px-1 py-0.5 text-sm',
  sm: 'px-2 py-1 text-base',
  md: 'px-3 py-1 text-base',
  lg: 'px-6 py-3 text-md',
  xl: 'px-8 py-4 text-lg'
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'standard', color = 'primary', size = 'md', shape = 'rect', children, ...props }, ref) => {
    const classNames = classnames(
      baseClasses,
      colorClasses[color],
      variantClasses[variant],
      shapeClasses[shape],
      sizeClasses[size]
    );

    return (
      <button className={classNames} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
