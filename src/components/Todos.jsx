import React, { Component } from "react";
import Completed from "./Completed";
import Todo from "./Todo";
import AddItem from "./AddItem";
import "./Todos.css";

class Todos extends Component {
  state = {
    todos: [
      { id: 1, task: "feed the cat" },
      { id: 2, task: "phone mum" },
      { id: 3, task: "study study study" }
    ],
    completed: [],
    search: ""
  };

  handleUpdate = e => {
    this.setState({
      search: e.target.value.substr(0, 20)
    });
  };

  addItem = item => {
    item.id = Math.random();
    let todos = [...this.state.todos, item];
    this.setState({
      todos: todos
    });
  };

  deleteItem = id => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    let complete = this.state.todos.filter(todo => {
      return todo.id === id;
    });
    console.log(complete);
    this.setState({
      todos: todos
    });
    this.setState({
      completed: this.state.completed.concat(complete)
    });
  };

  deleteCompleted = id => {
    let deleteCompleted = this.state.completed.filter(deleteComplete => {
      return deleteComplete.id !== id;
    });
    this.setState({
      completed: deleteCompleted
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container cont-main">
        <label htmlFor="first_name" className="search">
          Filter List
        </label>
        <input
          id="last_name"
          type="text"
          class="validate"
          value={this.state.search}
          onChange={this.handleUpdate}
        />
        <h2 className="center-align">Todo List</h2>
        <AddItem addItem={this.addItem} />
        <Todo
          todos={this.state.todos}
          search={this.state.search}
          deleteItem={this.deleteItem}
        />
        <br />
        <h3 className="center-align">Completed tasks</h3>
        <Completed
          completed={this.state.completed}
          todo={this.state.todo}
          deleteCompleted={this.deleteCompleted}
        />
      </div>
    );
  }
}

export default Todos;
