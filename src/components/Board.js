import React, { useState, useEffect, useCallback } from "react";
import BoardRow from "./BoardRow";
import { randomWord, checkWord } from "../api/backend";

const Board = () => {
  const [word, setWord] = useState("");
  const [activeRow, setActiveRow] = useState(0);
  const [guesses, setGuesses] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  const [rowCorrectness, setrowCorrectness] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  });

  useEffect(() => {
    setWord(randomWord);
  }, []);

  const submitRow = (currentRaw) => {
    let currentGuess = guesses[currentRaw];
    if (!checkWord(currentGuess)) {
      alert("wrong");
    } else {
      let currentRowCorrectness = [
        "unknown",
        "unknown",
        "unknown",
        "unknown",
        "unknown",
      ];

      for (let i = 0; i < 5; i++) {
        if (currentGuess[i] === word[i]) {
          currentRowCorrectness[i] = "correct";
        } else if (word.includes(currentGuess[i])) {
          currentRowCorrectness[i] = "wrong-location";
        } else {
          currentRowCorrectness[i] = "wrong";
        }
        setrowCorrectness({
          ...rowCorrectness,
          [currentRaw]: currentRowCorrectness,
        });
      }
      setActiveRow(activeRow + 1);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (guesses[activeRow].length === 5) {
        submitRow(activeRow);
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
    rows.push(
      <BoardRow
        key={i}
        values={guesses[i]}
        correctness={rowCorrectness[i]}
        active={activeRow === i ? "active" : ""}
      />
    );
  }

  return <div className="board">{rows}</div>;
};

export default Board;
