import React, { useEffect, useState } from "react";
import { MdOutlineBackspace } from "react-icons/md";

const KeyButton = ({ keyLetter, revealed }) => {
  return (
    <button
      className={`key${
        keyLetter === "enter" || keyLetter === "backspace" ? " large" : ""
      }${revealed.hasOwnProperty(keyLetter) ? ` ${revealed[keyLetter]}` : ""}`}
    >
      {keyLetter === "backspace" ? <MdOutlineBackspace /> : keyLetter}
    </button>
  );
};

export default KeyButton;

// const KeyButton = ({ keyLetter, keyType, revealed }) => {
//   // const [keyClass, setKeyClass] = useState({
//   //   enter: "key large",
//   //   backspace: "key large",
//   //   letter: "key",
//   // });

//   // useEffect(() => {
//   //   setKeyClass({
//   //     ...keyClass,
//   //     letter: `key ${
//   //       revealed.hasOwnProperty(keyLetter) ? revealed[keyLetter] : ""
//   //     }`,
//   //   });
//   // }, [revealed]);
//   const handleClick = () => {
//     console.log(revealed);
//   };

//   const [keyClass, setKeyClass] = useState("key");

//   useEffect(() => {
//     if (keyType === "enter" || keyType === "backspace") {
//       setKeyClass("key large");
//     } else {
//       setKeyClass(`key ${revealed[keyLetter]}`);
//     }
//   }, [revealed, keyType, keyLetter]);

//   return (
//     <button
//       className={keyClass}
//       onClick={handleClick}

//       // data-key={keyType}
//     >
//       {keyType === "backspace" ? <MdOutlineBackspace /> : keyLetter}
//     </button>
//   );
// };

// export default KeyButton;
