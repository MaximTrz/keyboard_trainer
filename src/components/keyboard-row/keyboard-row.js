import React from "react";
import LetterButton from "../letter-button/letter-button";
import "./style.css";

function KeyboardRow({ buttons }) {
  return (
    <div className={`keyboard-row`}>
      {buttons.map((kButton) => (
        <div key={kButton.letter} className="keyboard-row__key">
          <LetterButton
            letter={kButton.letter}
            active={kButton.active}
            member={kButton.member}
          ></LetterButton>
        </div>
      ))}
    </div>
  );
}

export default KeyboardRow;
