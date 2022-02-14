import React, { useEffect, useState } from "react";
import KeysRow from "./KeysRow";

const KeyBoard = ({ revealed }) => {
  const [keys, setKeys] = useState([
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
  ]);
  useEffect(() => {
    setKeys([...keys]);
  }, [revealed, keys]);

  return (
    <div className="keyboard">
      <KeysRow keys={keys.slice(0, 10)} revealed={revealed}></KeysRow>
      <div className="space"></div>
      <KeysRow keys={keys.slice(10, 19)} revealed={revealed}></KeysRow>
      <div className="space"></div>
      <KeysRow keys={keys.slice(19)} revealed={revealed}></KeysRow>
    </div>
  );
};

export default KeyBoard;
