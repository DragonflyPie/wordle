import React, { useState, useEffect } from "react";
import Board from "./Board";
import KeyBoard2 from "./KeyBoard";
import { randomWord, checkWord } from "../api/backend";

const Game = () => {
  const [revealed, setRevealed] = useState({});
  const delay = 1;
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

  const [alertState, setAlertState] = useState("hide");
  const [alertText, setAlertText] = useState("");

  useEffect(() => {
    setWord(randomWord);
  }, []);

  useEffect(() => {
    let alertTimer = setTimeout(() => setAlertState("hide"), delay * 1000);
    return () => {
      clearTimeout(alertTimer);
    };
  }, [alertState]);

  const submitRow = (currentRow) => {
    let currentGuess = guesses[currentRow];
    if (!checkWord(currentGuess)) {
      setAlertState("wrong");
      setAlertText("Not in word list");
    } else {
      let currentRowCorrectness = [
        "unknown",
        "unknown",
        "unknown",
        "unknown",
        "unknown",
      ];
      let currentRevealed = revealed;

      for (let i = 0; i < 5; i++) {
        if (currentGuess[i] === word[i]) {
          currentRowCorrectness[i] = "correct";
          currentRevealed[currentGuess[i]] = "correct";
        } else if (word.includes(currentGuess[i])) {
          if (!currentRevealed.hasOwnProperty(currentGuess[i])) {
            currentRevealed[currentGuess[i]] = "wrong-location";
          }
          currentRowCorrectness[i] = "wrong-location";
        } else {
          currentRowCorrectness[i] = "wrong";
          currentRevealed[currentGuess[i]] = "wrong";
        }
        setrowCorrectness({
          ...rowCorrectness,
          [currentRow]: currentRowCorrectness,
        });
        setRevealed(currentRevealed);
      }
      setActiveRow(activeRow + 1);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key.toLowerCase() === "enter") {
      if (guesses[activeRow].length === 5) {
        submitRow(activeRow);
        return;
      } else {
        setAlertState("short");
        setAlertText("Not enough letters");
        return;
      }
    } else if (e.key.toLowerCase() === "backspace" || e.key === "Delete") {
      setGuesses({
        ...guesses,
        [activeRow]: guesses[activeRow].slice(0, -1),
      });
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

  return (
    <div>
      <Board
        revealed={revealed}
        setRevealed={setRevealed}
        handleKeyPress={handleKeyPress}
        guesses={guesses}
        rowCorrectness={rowCorrectness}
        activeRow={activeRow}
        alertState={alertState}
        alertText={alertText}
      />
      <KeyBoard2 revealed={revealed} handleClick={handleKeyPress} />
    </div>
  );
};

export default Game;
