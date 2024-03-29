import { connect } from "react-redux";

import { useEffect, useMemo, useRef } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import KeyboardPanel from "./components/keyboard-panel";
import Timer from "./components/timer";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import useKeyPress from "./hooks/useKeyPress";

import { bindActionCreators } from "redux";
import * as actions from "./store/toolKit/toolkitReducer";

import ModalWindow from "./components/modalWindow";

function App({
  appData,
  setKey,
  tickTime,
  start,
  correctPress,
  uncorrectPress,
  showModalWindow,
  closeModalWindow,
}) {
  let { keys, time, started, correct, errors, timeFromRnd, windowDisplayed } =
    appData.toolkit;

  let gameIsOn = (time > 0) & started;

  const members = useMemo(
    () => appData.toolkit.keys.filter((key) => key.member),
    [appData.toolkit.keys]
  );

  let checkPress = (key, keyPressed) => {
    if (gameIsOn) {
      let keys = keyPressed.keys.map((key) => key.toLowerCase());
      if (keys.includes(key.toLowerCase())) {
        correctPress();
      } else {
        uncorrectPress();
      }
      if (time < timeFromRnd) {
        randomKey();
      } else {
        let currentActiveKey = members.findIndex((key) => key.active === true);
        let newActiveIndex;

        if (
          currentActiveKey === -1 ||
          currentActiveKey === members.length - 1
        ) {
          newActiveIndex = 0;
        } else {
          newActiveIndex = currentActiveKey + 1;
        }
        setKey(newActiveIndex);
      }
    }
  };

  let launchingGame = () => {
    if (!gameIsOn) {
      start();
      randomKey();
    }
  };

  useEffect(() => {
    if (started) {
      const timerId = setInterval(() => {
        if (time >= 1) {
          tickTime();
        } else {
          clearInterval(timerId);
          showModalWindow();
        }
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [started, time, tickTime, showModalWindow]);

  let curentKeyActive = keys.findIndex((key) => key.active === true);

  useKeyPress(keys[curentKeyActive], checkPress);

  let right = keys.filter((el) => el.hand === "right");
  let left = keys.filter((el) => el.hand === "left");

  const randomKey = () => {
    let memberKeys = keys.filter((key) => key.member);
    let curentKeyActive = memberKeys.findIndex((k) => k.active === true);
    let randomValue = Math.floor(Math.random() * memberKeys.length);
    while (randomValue === curentKeyActive) {
      randomValue = Math.floor(Math.random() * memberKeys.length);
    }
    setKey(randomValue);
  };

  let scores = correct - errors > 0 ? correct - errors : 0;
  let speed = 0;
  const allTime = useRef(time);

  if (scores > 0) {
    speed = Math.round(correct / (allTime.current / 60));
  }

  let message = `Скорость печати в этом упражнени составила ${speed} символов в минуту`;

  return (
    <div className="App">
      <ModalWindow
        show={windowDisplayed}
        handleClose={closeModalWindow}
        bodyText={message}
      />
      <div className="container">
        <div className="trainer">
          <div className="trainer__left">
            <KeyboardPanel keys={left} hand={"left"} />
          </div>
          <div className="trainer__center">
            <div className="trainer__indicator"></div>
            <div className="trainer__timer">
              <Timer time={time} />
            </div>
            <div className="trainer__points">
              <Alert variant="primary">Баллов: {scores}</Alert>
            </div>
            <div className="trainer__correct">
              <Alert variant="info">Правильных нажатий: {correct}</Alert>
            </div>
            <div className="trainer__errors">
              <Alert variant="danger">Ошибок: {errors}</Alert>
            </div>
            <div className="trainer__start">
              {!gameIsOn && (
                <Button variant="danger" onClick={launchingGame}>
                  Старт
                </Button>
              )}
            </div>
          </div>

          <div className="trainer__right">
            <KeyboardPanel keys={right} hand={"right"} />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  const {
    clearActive,
    setKey,
    tick,
    plusCorrect,
    plusErrors,
    chengeStart,
    setWindowDisplayed,
  } = bindActionCreators(actions, dispatch);
  return {
    setKey: (keyNumber) => {
      clearActive();
      setKey(keyNumber);
    },
    correctPress: () => {
      plusCorrect();
    },
    uncorrectPress: () => {
      plusErrors();
    },
    start: () => {
      chengeStart();
    },
    tickTime: tick,
    showModalWindow: () => {
      setWindowDisplayed(true);
    },
    closeModalWindow: () => {
      setWindowDisplayed(false);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    appData: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
