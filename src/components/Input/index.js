import React from "react";

export const Input = React.forwardRef(
  (
    { className, name, placeholder, type = "text", children, ...restProps },
    ref
  ) => {
    return (
      <>
        <input
          ref={ref}
          className={className}
          type={type}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {children}
      </>
    );
  }
);
