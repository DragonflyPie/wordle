import React, { useState } from "react";
import Board from "./Board";
import KeyBoard2 from "./KeyBoard";

const Game = () => {
  const [revealed, setRevealed] = useState({});

  return (
    <div>
      <Board revealed={revealed} setRevealed={setRevealed} />
      <KeyBoard2 revealed={revealed} />
    </div>
  );
};

export default Game;
