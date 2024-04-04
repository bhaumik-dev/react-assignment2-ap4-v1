import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/table">All Employees</Link>
        </li>
        <li>
          <Link to="/fullTime">Full Time Employees</Link>
        </li>
        <li>
          <Link to="/partTime">Part Time Employees</Link>
        </li>
        <li>
          <Link to="/seasonal">Seasonal Employees</Link>
        </li>
        <li>
          <Link to="/contract">Contractual Employees</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
