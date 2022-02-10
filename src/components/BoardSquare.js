import React from "react";

const BoardSquare = ({ value, correctness, active }) => {
  let classname =
    "square " + (value ? active : "") + (correctness ? " " + correctness : "");
  return <div className={classname}>{value}</div>;
};

export default BoardSquare;
