import React from "react";

const Completed = props => {
  let completedItems = props.completed.map(complete => {
    return (
      <div className="container" key={complete.id}>
        <ul className="row">
          <li className="list-item col s11">
            <h5 className="black-text ">
              <strike>{complete.task}</strike>
            </h5>
          </li>
          <button
            id="button"
            className="btn-floating red btn-small"
            onClick={() => {
              props.deleteCompleted(complete.id);
            }}
          >
            <i className="material-icons">delete</i>
          </button>
        </ul>
      </div>
    );
  });

  return <div>{completedItems}</div>;
};

export default Completed;
