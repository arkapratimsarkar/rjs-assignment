import React from "react";

const Rectangle = ({ colorStatus }) => {
  return (
    <div className={`${colorStatus ? "active-rectangle" : "rectangle"}`}>
      <p>Button Clicked</p>
    </div>
  );
};

export default Rectangle;
