import React from "react";
import ReactStars from "react-rating-stars-component";

export const RatingBar = ({
  children,
  className,
  selectedStarCount = 1,
  starCount = 5,
  color = "grey",
  activeColor = "red",
  ...restProps
}) => {
  return (
    <>
      <ReactStars
        edit={false}
        classNames={className}
        count={starCount}
        isHalf={false}
        value={selectedStarCount}
        color={color}
        activeColor={activeColor}
        {...restProps}
      />
      {children}
    </>
  );
};
