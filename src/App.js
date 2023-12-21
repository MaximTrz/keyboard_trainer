import { connect } from "react-redux";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import KeyboardPanel from "./components/keyboard-panel";
import Timer from "./components/timer";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import useKeyPress from "./hooks/useKeyPress";

import { bindActionCreators } from "redux";
import * as actions from "./store/actions";

function App({
  appData,
  next,
  rnd,
  tickTime,
  start,
  correctPress,
  uncorrectPress,
}) {
  let { keys, time, started, scores, correct, errors } = appData;

  let gameIsOn = (time > 0) & started;

  let checkPress = (key, keyPressed) => {
    if (gameIsOn) {
      let keys = keyPressed.keys.map((key) => key.toLowerCase());
      if (keys.includes(key.toLowerCase())) {
        correctPress();
      } else {
        uncorrectPress();
      }
      if (time < 10) {
        randomKey();
      } else {
        next();
      }
    }
  };

  let launchingGame = () => {
    if (!started) {
      start();
      const timerId = setInterval(() => {
        if (time > 0) {
          tickTime();
        } else {
          clearInterval(timerId);
        }
      }, 1000);
    }
  };

  let curentKeyActive = keys.findIndex((key) => key.active === true);

  useKeyPress(keys[curentKeyActive], checkPress);

  let right = keys.filter((el) => el.hand === "right");
  let left = keys.filter((el) => el.hand === "left");

  const randomKey = () => {
    const randomValue = Math.floor(Math.random() * keys.length);
    rnd(randomValue);
  };

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
              <Button variant="danger" onClick={launchingGame}>
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
  );
}

const mapDispatchToProps = (dispatch) => {
  const { nextKey, setKey, tick, plusCorrect, plusErrors, chengeStart } =
    bindActionCreators(actions, dispatch);
  return {
    next: nextKey,
    rnd: (keyNumber) => {
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
  };
};

const mapStateToProps = (state) => {
  return {
    appData: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
