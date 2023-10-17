import React from "react";

export const Button = ({ color, onClick, value }) => {
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      {value}
    </button>
  );
};
