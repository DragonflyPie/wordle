import React from "react";

const Alert = ({ alertState, text }) => {
  return <div className={`alert ${alertState}`}>{text}</div>;
};

export default Alert;
