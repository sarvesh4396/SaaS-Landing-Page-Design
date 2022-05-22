import React from "react";

export const Image = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  ...restProps
}) => {
  return (
    <img
      className={`${className} common-image`}
      src={require(`assets/images/${src}`)}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};
