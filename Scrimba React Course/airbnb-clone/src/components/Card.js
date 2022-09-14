import React from "react";

import "../styles/Card.css";

export const Card = ({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots,
}) => {
  let overlayText;
  if (openSpots === 0) {
    overlayText = "SOLD OUT";
  } else if (location === "Online") {
    overlayText = "ONLINE";
  }

  return (
    <div className="card">
      {overlayText && <div className="overlay">{overlayText}</div>}
      <img className="profile-picture" src={img} alt="img" />
      <div className="details">
        <div className="ratings">
          <img className="star" src="star.png" alt="star" />
          <span>&nbsp; {rating} &nbsp;</span>
          <span className="gray">({reviewCount}) • &nbsp;</span>
          <span className="gray">{location}</span>
        </div>
        <p className="card--title">{title}</p>
        <p className="price">
          <span className="bold">From ${price}</span>/ person
        </p>
      </div>
    </div>
  );
};
