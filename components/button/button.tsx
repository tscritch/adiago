export {};
// import React from "react";
// import classnames from "classnames";

// export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
//   /**
//    * Variant:
//    */
//   v?: "standard" | "outline" | "flat" | "transparent";
//   /**
//    * Color: primary, secondary, error, white
//    */
//   c?: "primary" | "secondary" | "error" | "white";
//   /**
//    * Size: small, medium, large
//    */
//   s?: "small" | "medium" | "large";
//   children: React.ReactNode;
//   type?: "button" | "submit" | "reset";
// }

// export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({v = "standard", c = "primary", s = "medium", children, ...props}, ref) => {
//     const classNames = classnames("button", {
//       "button-flat": v === "flat",
//       "button-outline": v === "outline",
//       "button-transparent": v === "transparent",
//       "button-primary": c === "primary",
//       "button-secondary": c === "secondary",
//       "button-error": c === "error",
//       "button-white": c === "white",
//       "button-small": s === "small",
//       "button-large": s === "large",
//     });

//     return (
//       <button className={classNames} ref={ref} {...props}>
//         {children}
//       </button>
//     );
//   }
// );
