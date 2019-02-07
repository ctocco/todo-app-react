import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Home = () => {
  return (
    <div className="container center" id="header">
      <div class="row center">
        <div class="col s12">
          <div class="card white darken-1">
            <div class="card-content white-text" />
            <div class="card-title">
              <h1>Welcome!</h1>
            </div>
            <p>Please click on the link below to go to go to your Todo list</p>
            <div class="card-action center waves-effect">
              <NavLink id="todo-nav" to="/todos">
                Todo
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
