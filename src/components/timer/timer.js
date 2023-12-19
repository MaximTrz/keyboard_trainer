import React from "react";
import Alert from "react-bootstrap/Alert";
import "./style.css";

function Timer({ time }) {
  let formatTime = (time) => {
    const minute = Math.floor(time / 60);
    const seconds = time % 60;
    const timeString = `${minute}:${seconds < 10 ? "0" : ""}${seconds}`;
    return time > 0 ? timeString : "Время вышло";
  };
  let formatedTime = formatTime(time);
  return <Alert variant="primary">{formatedTime}</Alert>;
}

export default Timer;
