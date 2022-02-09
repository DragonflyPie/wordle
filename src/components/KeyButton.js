import React from "react";
import { MdOutlineBackspace } from "react-icons/md";

const KeyButton = ({ keyLatter, keyType }) => {
  return (
    <button
      className={
        keyType === "enter" || keyType === "backspace" ? "key large" : "key"
      }
      // data-key={keyType}
    >
      {keyType === "backspace" ? <MdOutlineBackspace /> : keyLatter}
    </button>
  );
};

export default KeyButton;
