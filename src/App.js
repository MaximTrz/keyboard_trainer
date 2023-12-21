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

function App({ appData, next, rnd }) {
  let { keys } = appData;

  let keyPressed = useKeyPress(keys[0], () => {});
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
              <Button variant="danger" onClick={next}>
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
  const { nextKey, setKey } = bindActionCreators(actions, dispatch);
  return {
    next: nextKey,
    rnd: (keyNumber) => {
      setKey(keyNumber);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    appData: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
