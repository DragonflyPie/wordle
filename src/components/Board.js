import React, { useState, useEffect, useCallback } from "react";
import BoardRow from "./BoardRow";
import { randomWord, checkWord } from "../api/backend";
import Alert from "./Alert";

const Board = ({ revealed, setRevealed }) => {
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
  // const [revealed, setRevealed] = useState({});

  useEffect(() => {
    setWord(randomWord);
    // console.log(setRevealed, revealed);
  }, []);

  useEffect(() => {
    let alertTimer = setTimeout(() => setAlertState("hide"), delay * 1000);
    return () => {
      clearTimeout(alertTimer);
    };
    // let time = 2000;
    // setTimeout(() => {
    //   setAlertState("hide");
    // }, time);
    // clearTimeout();
  }, [alertState]);

  const submitRow = useCallback(
    (currentRaw) => {
      let currentGuess = guesses[currentRaw];
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
            [currentRaw]: currentRowCorrectness,
          });
          setRevealed(currentRevealed);
        }
        setActiveRow(activeRow + 1);
      }
    },
    [activeRow, guesses, rowCorrectness, word]
  );

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        if (guesses[activeRow].length === 5) {
          submitRow(activeRow);
          return;
        } else {
          setAlertState("short");
          setAlertText("Not enough letters");
          return;
        }
      } else if (e.key === "Backspace" || e.key === "Delete") {
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
    },
    [activeRow, guesses, submitRow]
  );

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
