import React from "react";
import KeysRow from "./KeysRow";

const KeyBoard = ({ revealed, handleClick }) => {
  const keys = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "enter",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "backspace",
  ];

  return (
    <div className="keyboard">
      <KeysRow
        keys={keys.slice(0, 10)}
        revealed={revealed}
        handleClick={handleClick}
      ></KeysRow>
      <div className="space"></div>
      <KeysRow
        keys={keys.slice(10, 19)}
        revealed={revealed}
        handleClick={handleClick}
      ></KeysRow>
      <div className="space"></div>
      <KeysRow
        keys={keys.slice(19)}
        revealed={revealed}
        handleClick={handleClick}
      ></KeysRow>
    </div>
  );
};

export default KeyBoard;
