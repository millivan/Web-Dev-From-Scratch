import React from "react";
import "../styles/Entry.css";

export const Entry = ({
  img,
  country,
  url,
  destination,
  startDate,
  endDate,
  desc,
}) => {
  return (
    <div className="Entry--grid">
      <img src={img} alt={destination} className="Entry--destination-picture" />
      <div className="Entry--info">
        <div className="Entry--top-bar">
          <img
            src="./Fill 219.png"
            alt="location-pin"
            className="Entry--location-pin"
          />
          <h3 className="Entry--country">{country}</h3>
          <a href={url} className="Entry--url" target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>

        <h1 className="Entry--destination">{destination}</h1>
        <h3 className="Entry--date">
          {startDate} -{endDate}
        </h3>
        <p className="Entry--description">{desc}</p>
      </div>
    </div>
  );
};
