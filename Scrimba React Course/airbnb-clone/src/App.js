import React from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar.js";
import { Hero } from "./components/Hero.js";
import { Card } from "./components/Card.js";
import { data } from "./data.js";
// import { Contact } from "./components/Contact";
// import whiskerson from "./img/mr-whiskerson.png";
// import fluffykins from "./img/fluffykins.png";
// import felix from "./img/felix.png";
// import pumpkin from "./img/pumpkin.png";

function App() {
  const entries = data.map(
    ({
      id,
      title,
      desc,
      price,
      coverImg,
      stats: { rating, reviewCount },
      location,
      openSpots,
    }) => {
      return (
        <Card
          key={id}
          rating={rating}
          reviewCount={reviewCount}
          location={location}
          title={title}
          price={price}
          img={coverImg}
          openSpots={openSpots}
        />
      );
    }
  );
  // const colors = [
  //   "Red",
  //   "Orange",
  //   "Yellow",
  //   "Green",
  //   "Blue",
  //   "Indigo",
  //   "Violet",
  // ];
  return (
    <>
      <Navbar />
      <div className="main">
        <Hero />
        <section className="cards"> {entries}</section>

        {/* {colors.map((color) => {
          return <h4>{color}</h4>;
        })} */}
        {/* <Contact
          img={whiskerson}
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img={fluffykins}
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact
          img={felix}
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact
          img={pumpkin}
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        /> */}
      </div>
    </>
  );
}

export default App;
