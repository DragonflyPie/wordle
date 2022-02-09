import React, { useState, useEffect, useCallback } from "react";
import BoardRow from "./BoardRow";

const Board = () => {
  const [activeRow, setActiveRow] = useState(0);
  const [guesses, setGuesses] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const submitRow = () => {
    setActiveRow(activeRow + 1);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (guesses[activeRow].length === 5) {
        submitRow();
      }
      return;
    } else if (e.key === "Backspace" || e.key === "Delete") {
      setGuesses({ ...guesses, [activeRow]: guesses[activeRow].slice(0, -1) });
    } else if (e.key.match(/^[a-z]$/)) {
      if (guesses[activeRow].length < 5) {
        setGuesses({
          ...guesses,
          [activeRow]: guesses[activeRow] + e.key,
        });
      }
      return;
    } else {
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  let rows = [];

  for (let i = 0; i < 6; i++) {
    rows.push(<BoardRow key={i} values={guesses[i]} />);
  }

  return <div className="board">{rows}</div>;
};

export default Board;
