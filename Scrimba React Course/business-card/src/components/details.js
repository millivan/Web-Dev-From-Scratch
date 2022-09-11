import "../styles/details.css";

export const Details = ({ title, description }) => {
  return (
    <div className="details">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
