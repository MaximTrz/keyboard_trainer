import React, { useState } from "react";

import { createStore, bindActionCreators } from "redux";

import { Provider } from "react-redux";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import KeyboardPanel from "./components/keyboard-panel";
import Timer from "./components/timer";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import useKeyPress from "./hooks/useKeyPress";

import rootReducer from "./reducer";
const store = createStore(rootReducer);
const { dispatch } = store;

store.subscribe(() => {
  //console.log(store.getState());
});

function App() {
  let { keys } = store.getState();

  let keyPressed = useKeyPress(keys[0], () => {});
  let right = keys.filter((el) => el.hand === "right");
  let left = keys.filter((el) => el.hand === "left");

  let nextKey = () => {
    store.dispatch({ type: "NextKey" });
  };

  return (
    <Provider store={store}>
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
                <Button variant="danger" onClick={nextKey}>
                  Старт
                </Button>
              </div>
            </div>

            <div className="trainer__right">
              <KeyboardPanel keys={right} />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
