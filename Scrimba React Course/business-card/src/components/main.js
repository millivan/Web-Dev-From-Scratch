import "../styles/main.css";
export const Main = ({ name, position, website }) => {
  return (
    <div className="main-content">
      <h1 className="name">{name}</h1>
      <h3 className="position">{position}</h3>
      <h5 className="website">{website}</h5>
    </div>
  );
};
