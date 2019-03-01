import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="nav-wrapper white">
      <div className="container">
        <NavLink className="brand-logo black-text" to="/todos">
          Todo
        </NavLink>
        <ul className="right  ">
          <li>
            <Link className="black-text" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="black-text" to="/todos">
              Todos
            </Link>
          </li>
          <li>
            <NavLink className="black-text" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
