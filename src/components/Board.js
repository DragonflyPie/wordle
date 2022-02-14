import React, { useEffect } from "react";
import BoardRow from "./BoardRow";

import Alert from "./Alert";

const Board = ({
  handleKeyPress,
  guesses,
  rowCorrectness,
  activeRow,
  alertState,
  alertText,
}) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  let rows = [];

  for (let i = 0; i < 6; i++) {
    rows.push(
      <BoardRow
        key={i}
        values={guesses[i]}
        correctness={rowCorrectness[i]}
        active={activeRow === i ? "active" : ""}
        alertState={alertState !== "hide" ? true : false}
      />
    );
  }

  return (
    <div className="board">
      <Alert alertState={alertState} text={alertText} />
      {rows}
    </div>
  );
};

export default Board;
