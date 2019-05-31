import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todos, search, deleteItem } = this.props;
    let filteredItems = todos.filter(item => {
      return item.task.toLowerCase().indexOf(search.toLowerCase()) >= 0;
    });

    let todoItem = filteredItems.map(todo => {
      return (
        <div className="container collection" key={todo.id}>
          <ul className="row">
            <li className="list-item col">
              <h5 className="black-text collection-item">
                {todo.task}
                <span
                  id="button"
                  className="btn-floating black btn-small"
                  onClick={() => {
                    deleteItem(todo.id);
                  }}
                >
                  <i className="material-icons">check</i>
                </span>
              </h5>
            </li>
          </ul>
        </div>
      );
    });

    return <div className="todo-list">{todoItem}</div>;
  }
}

export default Todo;
