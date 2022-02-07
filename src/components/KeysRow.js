import React from "react";
import KeyButton from "./KeyButton";

const KeysRow = ({ keys }) => {
  const renderedRow = [];
  let keyType;

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === "enter") {
      keyType = "enter";
    } else if (keys[i] === "backspace") {
      keyType = "backspace";
    } else {
      keyType = "letter";
    }
    renderedRow.push(<KeyButton keyLatter={keys[i]} keyType={keyType} />);
  }

  return <>{renderedRow}</>;
};

export default KeysRow;
