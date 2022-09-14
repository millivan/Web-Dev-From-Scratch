import React from "react";
import "../styles/Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <img src="photo-grid.png" alt="grid" className="grid" />
      <h1 className="title">Online Experiences</h1>
      <p className="desc">
        Join unique interactive activites led by one-of-a-kind hosts-all without
        leaving home.
      </p>
    </section>
  );
};
