import React from "react";
import Alert from "react-bootstrap/Alert";
import "./style.css";

function LetterButton({ keyBtn }) {
  let { letter, active, member } = keyBtn;
  let classNames = active
    ? "letter-button letter-button_active mb-0"
    : "letter-button mb-0";
  if (!member) {
    classNames += " letter-button_opacity";
  }
  return (
    <Alert variant="primary" className={classNames}>
      {letter.toUpperCase()}
    </Alert>
  );
}

export default LetterButton;
