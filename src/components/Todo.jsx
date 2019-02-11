import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todos, search, deleteItem } = this.props;
    let filteredItems = todos.filter(item => {
      return item.task.toLowerCase().indexOf(search.toLowerCase()) >= 0;
    });
    console.log(filteredItems);

    let todoItem = filteredItems.map(todo => {
      return (
        <div className="container" key={todo.id}>
          <ul className="row">
            <li className="list-item col s11">
              <h5 className="black-text">{todo.task}</h5>
            </li>
            <button
              id="button"
              className="btn-floating black btn-small"
              onClick={() => {
                deleteItem(todo.id);
              }}
            >
              <i className="material-icons">check</i>
            </button>
          </ul>
        </div>
      );
    });

    return <div className="todo-list">{todoItem}</div>;
  }
}

export default Todo;
