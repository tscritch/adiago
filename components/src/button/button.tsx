import React from 'react';
// import classnames from "classnames";

type ReducedHTMLButtonElement = Omit<React.HTMLProps<HTMLButtonElement>, 'size'>;

export interface ButtonProps extends ReducedHTMLButtonElement {
  children: React.ReactNode;
  /**
   * Color: primary, secondary, error, white
   */
  color?: 'primary' | 'secondary' | 'error' | 'white';
  /**
   * Shape: rect, circle
   */
  shape?: 'rect' | 'circle';
  /**
   * Size: xs, sm, md, lg
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  /**
   * Variant: standard, outline, flat, transparent
   */
  variant?: 'standard' | 'outline' | 'flat' | 'transparent';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'standard', color = 'primary', size = 'md', shape = 'rect', children, ...props }, ref) => {
    // const classNames = classnames('button', {
    //   'button-flat': v === 'flat',
    //   'button-outline': v === 'outline',
    //   'button-transparent': v === 'transparent',
    //   'button-primary': c === 'primary',
    //   'button-secondary': c === 'secondary',
    //   'button-error': c === 'error',
    //   'button-white': c === 'white',
    //   'button-small': s === 'small',
    //   'button-large': s === 'large'
    // });

    return (
      <button className="bg-black text-adiago-100 dark:bg-white" ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
