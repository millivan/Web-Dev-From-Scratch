import logo from "../img/react-logo.png";
import "./header.css";
import React from "react";

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} alt="react-logo" className="logo" />

        <ul className="nav-items">
          <li class="list-items">Pricing</li>
          <li class="list-items">About</li>
          <li class="list-items">Contact</li>
        </ul>
      </nav>
    </header>
  );
};
