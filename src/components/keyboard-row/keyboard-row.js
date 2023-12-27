import React from "react";
import LetterButton from "../letter-button/letter-button";
import "./style.css";

function KeyboardRow({ buttons }) {
  return (
    <div className="keyboard-row">
      {buttons.map((keyButton) => (
        <div key={keyButton.letter} className="keyboard-row__key">
          <LetterButton keyBtn={keyButton}></LetterButton>
        </div>
      ))}
    </div>
  );
}

export default KeyboardRow;
