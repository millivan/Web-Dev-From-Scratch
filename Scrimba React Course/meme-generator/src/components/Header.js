import React from "react";
import "../styles/Header.css";

export const Header = () => {
  return (
    <header id="Header--header">
      <img src="Troll Face.png" alt="troll" id="Header--logo" />
      <h2 id="Header--title">Meme Generator</h2>
      <h4 id="Header--subtitle">React Course - Project 3</h4>
    </header>
  );
};
