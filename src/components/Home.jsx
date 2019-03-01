import React from "react";
import { NavLink } from "react-router-dom";
import image from "../img/todo.jpg";

const Home = () => {
  return (
    <div className="container center" id="header">
      <div className="row center">
        <div className="col s12">
          <div className="card white darken-1">
            <div className="card-content white-text" />
            <div className="card-title">
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

// const background = {
//   backgroundImage: `url(require(image))`,
//   backgroundSize: "cover",
//   height: "100%",
//   overflow: "hidden",
//   backgroundColor: "aliceblue"
// };
