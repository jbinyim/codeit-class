import React from "react";
import Dice from "./Dice";

const Board = ({ color, num, gameHistory }) => {
  return (
    <div style={{ backgroundColor: "#e9e9e9" }}>
      <Dice color={color} num={num} />
      <div>{gameHistory.join(",")}</div>
    </div>
  );
};

export default Board;
