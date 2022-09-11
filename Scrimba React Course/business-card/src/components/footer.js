import Twitter from "../img/Twitter Icon.svg";
import Facebook from "../img/Facebook Icon.svg";
import Instagram from "../img/Instagram Icon.svg";
import GitHub from "../img/GitHub Icon.svg";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="card-footer">
      <img src={Twitter} alt="twitter-icon" />
      <img src={Facebook} alt="facebook-icon" />
      <img src={Instagram} alt="instagram-icon" />
      <img src={GitHub} alt="github-icon" />
    </footer>
  );
};
