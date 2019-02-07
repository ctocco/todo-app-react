import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Home = () => {
  return (
    <div className="container center">
      <h1>Your to do list</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        corrupti sapiente distinctio voluptates omnis minima est quidem iure
        soluta nobis!
      </p>
      <li>
        <NavLink to="/todos">Todo</NavLink>
      </li>
    </div>
  );
};

export default Home;
