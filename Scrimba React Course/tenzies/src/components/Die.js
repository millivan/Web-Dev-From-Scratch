import React from "react";
import "../App.css";

export const Die = ({ value, isHeld, holdDice }) => {
  // const [num, setNum] = useState(1);
  // const updateDie = () => {
  //   setNum(Math.floor(Math.random() * 6) + 1);
  // };
  const styles = { backgroundColor: isHeld ? "#59e391" : "white" };
  return (
    <div className="die" style={styles} onClick={holdDice}>
      {value}
    </div>
  );
};
