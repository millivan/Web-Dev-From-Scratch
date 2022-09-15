import React from "react";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="Navbar--navbar">
      <div className="Navbar--brand-container">
        <img src="./Fill 213.png" alt="logo" className="Navbar--image" />
        <h4 className="Navbar--title">my travel journal.</h4>
      </div>
    </nav>
  );
};
