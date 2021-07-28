import React from "react";
import { Link } from "react-router-dom";

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
      <div className="navbar-app__name">Project name</div>
      <ul className="navbar-app__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};
