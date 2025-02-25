import React from "react";
import diceBlue01 from "./img/dice-blue-1.svg";
import diceBlue02 from "./img/dice-blue-2.svg";
import diceBlue03 from "./img/dice-blue-3.svg";
import diceBlue04 from "./img/dice-blue-4.svg";
import diceBlue05 from "./img/dice-blue-5.svg";
import diceBlue06 from "./img/dice-blue-6.svg";
import diceRed01 from "./img/dice-red-1.svg";
import diceRed02 from "./img/dice-red-2.svg";
import diceRed03 from "./img/dice-red-3.svg";
import diceRed04 from "./img/dice-red-4.svg";
import diceRed05 from "./img/dice-red-5.svg";
import diceRed06 from "./img/dice-red-6.svg";

const DICE_IMAGES = {
  blue: [
    diceBlue01,
    diceBlue02,
    diceBlue03,
    diceBlue04,
    diceBlue05,
    diceBlue06,
  ],
  red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
};

const Dice = ({ color, num }) => {
  const src = DICE_IMAGES[color][num - 1];
  const alt = `${color} ${num}`;
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Dice;
