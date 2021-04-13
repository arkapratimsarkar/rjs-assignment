import React from "react";

const Button = ({ colorStatus, setColorStatus }) => {
  return (
    <div className="button">
      <button className="btn-1" onClick={() => setColorStatus(!colorStatus)}>
        Press
      </button>
    </div>
  );
};

export default Button;
