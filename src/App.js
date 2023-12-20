import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import KeyboardPanel from "./components/keyboard-panel";
import Timer from "./components/timer";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import useKeyPress from "./hooks/useKeyPress";

function App() {
  let [keys, setKeys] = useState(keysStub());
  let keyPressed = useKeyPress(keys[0], () => {});
  let right = keys.filter((el) => el.hand === "right");
  let left = keys.filter((el) => el.hand === "left");
  return (
    <div className="App">
      <div className="container">
        <div className="trainer">
          <div className="trainer__left">
            <KeyboardPanel keys={left} />
          </div>

          <div className="trainer__center">
            <div className="trainer__indicator"></div>
            <div className="trainer__timer">
              <Timer time={180} />
            </div>
            <div className="trainer__points">
              <Alert variant="primary">Баллов: {10}</Alert>
            </div>
            <div className="trainer__correct">
              <Alert variant="info">Правильных нажатий: {10}</Alert>
            </div>
            <div className="trainer__errors">
              <Alert variant="danger">Ошибок: {10}</Alert>
            </div>
            <div className="trainer__start">
              <Button variant="danger">Старт</Button>
            </div>
          </div>

          <div className="trainer__right">
            <KeyboardPanel keys={right} />
          </div>
        </div>
      </div>
    </div>
  );
}

function keysStub() {
  return [
    {
      letter: "Ф",
      hand: "left",
      keyKode: 97,
      row: "center",
      active: true,
    },
    {
      letter: "Ы",
      hand: "left",
      keyKode: 13,
      row: "center",
      active: false,
    },
    {
      letter: "В",
      hand: "left",
      keyKode: 13,
      row: "center",
      active: false,
    },
    {
      letter: "А",
      hand: "left",
      keyKode: 13,
      row: "center",
      active: false,
    },

    {
      letter: "О",
      hand: "right",
      keyKode: 13,
      row: "center",
      active: false,
    },
    {
      letter: "Л",
      hand: "right",
      keyKode: 13,
      row: "center",
      active: false,
    },
    {
      letter: "Д",
      hand: "right",
      keyKode: 13,
      row: "center",
      active: false,
    },
    {
      letter: "Ж",
      hand: "right",
      keyKode: 13,
      row: "center",
      active: false,
    },
  ];
}

export default App;
