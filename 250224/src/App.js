import Board from "./Board";
import Button from "./Button";
import { useState } from "react";

const random = (n) => {
  return Math.ceil(Math.random() * n);
};

function App() {
  const [myGameHistory, setMyGameHistory] = useState([1]);
  const [yourGameHistory, setYourGameHistory] = useState([1]);

  const handleClick = () => {
    const myNextNum = random(6);
    const yourNextNum = random(6);

    setMyGameHistory([...myGameHistory, myNextNum]);
    setYourGameHistory([...yourGameHistory, yourNextNum]);
  };

  const handleReset = () => {
    setMyGameHistory([1]);
    setYourGameHistory([1]);
  };

  return (
    <div>
      <Board
        color="blue"
        num={myGameHistory[myGameHistory.length - 1]}
        gameHistory={myGameHistory}
      />
      <Board
        color="red"
        num={yourGameHistory[yourGameHistory.length - 1]}
        gameHistory={yourGameHistory}
      />
      <Button onClick={handleClick}>던지기</Button>
      <Button onClick={handleReset}>처음부터</Button>
    </div>
  );
}

export default App;
