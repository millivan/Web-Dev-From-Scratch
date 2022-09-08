import React from "react";
import "./navbar.css";
import icon from "../img/react-icon-small.png";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="brand-container">
        <img src={icon} alt="react-icon-small" className="react-icon" />
        <h1 className="title">ReactFacts</h1>
      </div>
      <p className="subject">React Course - Project 1</p>
    </nav>
  );
};
