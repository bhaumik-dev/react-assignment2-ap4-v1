import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <ul>
        <li>
          <Link to="/">Employee Directory</Link>
        </li>
        <li>
          <Link to="/create">Create Employee</Link>
        </li>
        <li>
          <Link to="/table">Employee Table</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
