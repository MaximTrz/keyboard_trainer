import React from "react";
import LetterButton from "../letter-button/letter-button";
import "./style.css";

function KeyboardPanel({ keys }) {
  const filterKeysByRow = (row) => {
    return keys.filter((kbutton) => kbutton.row === row);
  };
  let top = filterKeysByRow("top");
  let center = filterKeysByRow("center");
  let bottom = filterKeysByRow("bottom");

  return (
    <div className="keyboard-panel">
      <div className="keyboard-panel__row keyboard-panel__row_top">
        {top.map((kButton) => (
          <div key={kButton.letter} className="keyboard-panel__key">
            <LetterButton
              letter={kButton.letter}
              active={kButton.active}
            ></LetterButton>
          </div>
        ))}
      </div>
      <div className="keyboard-panel__row keyboard-panel__row_center">
        {center.map((kButton) => (
          <div key={kButton.letter} className="keyboard-panel__key">
            <LetterButton
              letter={kButton.letter}
              active={kButton.active}
            ></LetterButton>
          </div>
        ))}
      </div>
      <div className="keyboard-panel__row keyboard-panel__row_bottom">
        {bottom.map((kButton) => (
          <div key={kButton.letter} className="keyboard-panel__key">
            <LetterButton
              letter={kButton.letter}
              active={kButton.active}
            ></LetterButton>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyboardPanel;
