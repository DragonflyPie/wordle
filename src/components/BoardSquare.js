import React from "react";

const BoardSquare = ({ value, correctness, active, alertState }) => {
  let classname = `square${value ? ` ${active}` : ""}${
    correctness ? ` ${correctness}` : ""
  }${alertState ? " shake" : ""}`;
  return <div className={classname}>{value}</div>;
};

export default BoardSquare;
