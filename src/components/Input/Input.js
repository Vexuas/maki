import React from "react";
import "./Input.css";

export const Input = props => {
  let className = "input";
  if (props.hasError) {
    className = `${className} error`;
  }

  return (
    <input
      className={className}
      onChange={props.handleChange}
      value={props.value}
    />
  );
};
