import cn from "classnames";
import React from "react";

const Button = ({ className, disabled, isSmall, ...rest }, ref) => (
  <button
    ref={ref}
    className={cn(
      "rounded-md leading-5 text-white",
      isSmall ? "text-sm px-2 py-1" : "font-semibold py-2 px-3",
      disabled
        ? "bg-slate-400 hover:bg-slate-400"
        : "bg-indigo-600 hover:bg-indigo-500",
      className
    )}
    disabled={disabled}
    {...rest}
  />
);

export default React.forwardRef(Button);
