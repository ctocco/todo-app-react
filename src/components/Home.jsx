import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Home = () => {
  return (
    <div className="container center" id="header">
      <div class="row center">
        <div class="col s12 ">
          <div class="card white darken-1">
            <div class="card-content white-text" />
            <h1>Your to do list</h1>
            <p>Please click on the link below to go to go to your do to list</p>
            <div class="card-action center waves-effect">
              <NavLink to="/todos">Todo</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
