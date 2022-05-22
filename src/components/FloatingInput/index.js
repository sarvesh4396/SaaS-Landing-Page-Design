import React from "react";

export const FloatingInput = ({
  className,
  name,
  labelClasses,
  wrapperClasses,
  labelText,
  defaultText,
  ...rest
}) => {
  return (
    <div className={`relative ${wrapperClasses}`}>
      <input
        name={name}
        className={`${className}`}
        placeholder=" "
        defaultValue={defaultText}
        {...rest}
      />
      <label className={`${labelClasses}`}>{labelText}</label>
    </div>
  );
};
