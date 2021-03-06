import React, { Component } from "react";
import "./TodoList.css";
import { TodoCard } from "../TodoCard/TodoCard";

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        {this.props.todos.map((todo, index) => {
          return (
            <TodoCard
              todo={todo}
              key={todo.created_at.getMilliseconds()}
              index={index}
              removeTodo={this.props.removeTodo}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
