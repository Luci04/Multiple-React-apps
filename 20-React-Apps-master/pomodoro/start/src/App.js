import React, { useState, useRef } from "react";
import "./App.css";

function padTime(time) {
  return time.toString().padStart(2, '0');
}


export default function App() {

  const [title, setTitle] = useState("Pomodora!!!");
  const [timeLeft, setTimeLeft] = useState(10);

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime((timeLeft - minutes * 60));
  let intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current !== null)
      return;

    setTitle("Let The Countdown Begin!!!")
    intervalRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1)
          return timeLeft - 1;
        return 0;
      });

    }, 1000)
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    setTitle("Keep it up!!!")
    intervalRef.current = null;
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    setTimeLeft(25 * 60);
    setTitle("Pomodora!!!")
  }



  return (
    <div className="app">

      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimer} >Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
