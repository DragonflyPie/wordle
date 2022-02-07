import React from "react";
import KeysRow from "./KeysRow";

const Keyboard = () => {
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
      <KeysRow keys={keys.slice(0, 10)}></KeysRow>
      <div className="space"></div>
      <KeysRow keys={keys.slice(10, 19)}></KeysRow>
      <div className="space"></div>
      <KeysRow keys={keys.slice(19)}></KeysRow>
    </div>
  );
};

export default Keyboard;
