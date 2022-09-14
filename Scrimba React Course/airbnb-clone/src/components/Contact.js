import React from "react";
import phoneIcon from "../img/phone-icon.png";
import mailIcon from "../img/mail-icon.png";
import "../styles/Contact.css";

export const Contact = ({ img, name, phone, email }) => {
  return (
    <div className="contact-card">
      <img src={img} alt="profile" />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={phoneIcon} alt="phone-icon" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src={mailIcon} alt="mail-icon" />
        <p>{email}</p>
      </div>
    </div>
  );
};
