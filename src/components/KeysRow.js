import React from "react";
import KeyButton from "./KeyButton";

const KeysRow = ({ keys, revealed, handleClick }) => {
  const row = keys.map((symbol) => {
    return (
      <KeyButton
        key={symbol}
        keyLetter={symbol}
        revealed={revealed}
        handleClick={handleClick}
      />
    );
  });

  return <>{row}</>;
};

export default KeysRow;
