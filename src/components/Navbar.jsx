import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="nav-wrapper white">
      <div className="container">
        <a className="brand-logo lime-text darken-3">To Do App</a>
        <ul className="right  ">
          <li>
            <Link className="lime-text darken-1" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="lime-text darken-1" to="/todos">
              Todos
            </Link>
          </li>
          <li>
            <NavLink className="lime-text darken-1" to="/about">
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/contact">Contact</NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
