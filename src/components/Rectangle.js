import React from "react";

const Rectangle = ({ colorStatus }) => {
  return (
    <div className={`rectangle ${colorStatus ? "active-rectangle" : ""}`}></div>
  );
};

export default Rectangle;
