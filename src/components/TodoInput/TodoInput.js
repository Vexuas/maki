import React, { Component } from "react";
import "./TodoInput.css";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

function messageDecorator(todos) {
  const length = todos.length;

  if (length === 0) {
    return "No Todos!";
  } else {
    return `${length} Todos`;
  }
}
function formValidator(value) {
  return value.length > 0;
}
class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      hasError: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState({
      value: value,
      hasError: !formValidator(value)
    });
  }
  handleSubmit(event) {
    const value = this.state.value;
    if (formValidator(value)) {
      this.props.addTodo(value);
      this.clearForm();
    } else {
      this.setState({
        hasError: true
      });
    }
    event.preventDefault();
  }
  clearForm() {
    this.setState({
      value: ""
    });
  }

  render() {
    return (
      <div className="TodoInput">
        <div className="TodoInput-header">
          <img
            className="TodoInput-mascot"
            alt="betsuni"
            src="https://cdn.discordapp.com/attachments/511245116871278594/549145630560223232/nishikino_maki_love_live_school_idol_project_and_etc_drawn_by_ikiyouz__0f8800bc2bf59bf9b62cb86f33953.png"
          />
          <div className="TodoInput-message">
            <span>{messageDecorator(this.props.todos)}</span>
          </div>
        </div>
        <form className="TodoInput-input" onSubmit={this.handleSubmit}>
          <Input
            value={this.state.value}
            handleChange={this.handleChange}
            hasError={this.state.hasError}
          />
          <div className="TodoInput-buttons">
            <Button text="Add Todo" color="pink" action={this.handleSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

export default TodoInput;
