import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

//get button name and path for evaery component
const Navbar = (props) => {
  return (
    <div className="navbar">
      <h2>Albums List React App</h2>
      <Link to={props.path}>
        <button>{props.page}</button>
      </Link>
    </div>
  );
};

export default Navbar;
