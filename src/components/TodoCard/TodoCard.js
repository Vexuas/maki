import React from "react";
import "./TodoCard.css";
import { Button } from "../Button/Button";

export const TodoCard = props => {
  return (
    <article className="TodoCard">
      <div className="TodoCard-content">
        <span>{props.todo.title}</span>
      </div>
      <div className="TodoCard-button">
        <Button
          color="pink"
          text="Complete"
          action={() => {
            props.removeTodo(props.index);
          }}
        />
      </div>
    </article>
  );
};
