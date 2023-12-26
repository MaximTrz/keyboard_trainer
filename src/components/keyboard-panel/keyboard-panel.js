import React from "react";

import "./style.css";

import KeyboardRow from "../keyboard-row/keyboard-row";

function KeyboardPanel({ keys, hand }) {
  const filterKeysByRow = (row) => {
    return keys.filter((kbutton) => kbutton.row === row);
  };

  let top = filterKeysByRow("top");
  let center = filterKeysByRow("center");
  let bottom = filterKeysByRow("bottom");

  return (
    <div className="keyboard-panel">
      <div
        className={
          "keyboard-panel__row keyboard-panel__row_top" +
          (hand === "left"
            ? " keyboard-panel__row_transform-left"
            : " keyboard-panel__row_transform-right")
        }
      >
        <KeyboardRow buttons={top} />
      </div>
      <div className="keyboard-panel__row">
        <KeyboardRow
          buttons={center}
          customClassName="keyboard-panel__row_center"
        />
      </div>
      <div
        className={
          "keyboard-panel__row_top" +
          (hand === "left"
            ? " keyboard-panel__row_transform-right"
            : " keyboard-panel__row_transform-left")
        }
      >
        <KeyboardRow buttons={bottom} />
      </div>
    </div>
  );
}

export default KeyboardPanel;
