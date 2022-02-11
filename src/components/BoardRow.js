import React from "react";
import BoardSquare from "./BoardSquare";

const BoardRow = ({ values, correctness, active, alertState }) => {
  let squares = [];
  for (let i = 0; i < 5; i++) {
    squares.push(
      <BoardSquare
        key={i}
        value={values[i]}
        correctness={correctness[i]}
        active={active}
        alertState={alertState}
      />
    );
  }

  return <div className="board-row">{squares}</div>;
};

export default BoardRow;
