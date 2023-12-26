import React from "react";
import Alert from "react-bootstrap/Alert";
import "./style.css";

function LetterButton({ letter, active, member }) {
  let classNames = active
    ? "letter-button letter-button_active mb-0"
    : "letter-button mb-0";
  if (!member) {
    classNames += " letter-button_opacity";
  }
  return (
    <Alert variant="primary" className={classNames}>
      {letter}
    </Alert>
  );
}

export default LetterButton;
