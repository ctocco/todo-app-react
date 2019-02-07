import React, { Component } from "react";
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
    console.log(id);
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
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
        <h1>Todo List</h1>
        <AddItem addItem={this.addItem} />
        <Todo
          todos={this.state.todos}
          search={this.state.search}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default Todos;
