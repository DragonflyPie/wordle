import React from "react";
import KeyButton from "./KeyButton";

const KeysRow = ({ keys, revealed }) => {
  const row = keys.map((symbol) => {
    return <KeyButton key={symbol} keyLetter={symbol} revealed={revealed} />;
  });

  return <>{row}</>;
};

export default KeysRow;
