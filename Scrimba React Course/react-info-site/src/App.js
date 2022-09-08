import React from "react";
import "./App.css";
import logo from "./img/react-logo.png";

export const App = () => {
  return (
    <div className="app-container">
      <img src={logo} alt="react-logo" className="logo " />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first release in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is mainained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
};
