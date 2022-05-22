import React from "react";

export const Button = ({ children, className, ...restProps }) => {
  return (
    <button className={`${className} common-button`} {...restProps}>
      {children}
    </button>
  );
};
