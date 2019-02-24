import React, { Component } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import "./Feed.css";

class Todo {
  constructor(title, completed = false, created_at = new Date()) {
    this.title = title;
    this.completed = completed;
    this.created_at = new Date(created_at);
  }
}

/**
 * Converts the todos into a JSON object and persists it into localstorage
 * @param {Array} todos
 */
function persistTodos(todos) {
  const payload = JSON.stringify(todos);
  localStorage.setItem("todos", payload);
}
/**
 * Rehydrates the stored values from localstorage into actual Todo classes
 */
function getStoredTodos() {
  let todos = localStorage.getItem("todos");
  if (todos === null) {
    return [];
  } else {
    todos = JSON.parse(todos);
    todos = todos.map(todo => {
      return new Todo(todo.title, todo.completed, todo.created_at);
    });
    return todos;
  }
}

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: getStoredTodos()
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
    persistTodos(todos);
  }
  removeTodo(index) {
    let todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({
      todos: todos
    });
    persistTodos(todos);
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
