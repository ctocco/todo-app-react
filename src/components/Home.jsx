import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container center" id="header">
      <div className="row center">
        <div className="col s12">
          <div className="card">
            <div className="card-title">
              <h1>Welcome!</h1>
            </div>
            <p>Please click on the link below to go to your Todo list</p>
            <div className="center todo-homepage-link">
              <NavLink id="todo-nav" to="/todos">
                <h5>Todo</h5>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
