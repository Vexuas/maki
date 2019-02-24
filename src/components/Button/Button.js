import React from "react";
import "./Button.css";

/**
 * A simple button
 *
 * @param {string} color
 * @param {string} text
 * @param {function} action
 */
export const Button = props => {
  return (
    <button className={`button ${props.color}`} onClick={props.action}>
      {props.text}
    </button>
  );
};
