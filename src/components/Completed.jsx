import React from "react";

const Completed = props => {
  let completedItems = props.completed.map(complete => {
    return (
      <div className="container collection" key={complete.id}>
        <ul className="row">
          <li className="list-item col ">
            <h5 className="black-text collection-item completed-text">
              {complete.task}
              <span
                id="button"
                className="btn-floating red btn-small"
                onClick={() => {
                  props.deleteCompleted(complete.id);
                }}
              >
                <i className="material-icons">delete</i>
              </span>
            </h5>
          </li>
        </ul>
      </div>
    );
  });

  return <div>{completedItems}</div>;
};

export default Completed;
