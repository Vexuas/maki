import React, { Component } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import "./Feed.css";

class Todo {
  constructor(title) {
    this.title = title;
    this.completed = false;
    this.created_at = new Date();
  }
}

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(title) {
    const t = new Todo(title);
    let todos = this.state.todos;
    todos.push(t);
    this.setState({
      todos: todos
    });
  }
  removeTodo(index) {
    let todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({
      todos: todos
    });
  }
  render() {
    return (
      <div className="Feed">
        <TodoInput addTodo={this.addTodo} todos={this.state.todos} />
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default Feed;
