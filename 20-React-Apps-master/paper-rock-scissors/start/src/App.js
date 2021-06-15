import React, { useState, useEffect } from "react";
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scissors from "./icons/Scissors";
import "./App.css";


const choices = [
  { id: 1, name: 'rock', component: Rock, lossesTo: 2 },
  { id: 2, name: 'paper', component: Paper, lossesTo: 3 },
  { id: 3, name: 'scissors', component: Scissors, lossesTo: 1 }
];


export default function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(null);
  //win , loss , draw

  useEffect(() => {
    reStartGame();
  }, [])

  function reStartGame() {
    setGameState(null);
    setUserChoice(null);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  function handleUserChoice(choice) {
    const chosen = choices.find(c => c.id === choice);
    setUserChoice(chosen);

    //determine the winner

    if (chosen.lossesTo === computerChoice.id) {
      //draw
      setGameState('lose');
      setLosses(losses => losses + 1);
    } else if (computerChoice.lossesTo === chosen.id) {
      //win
      setGameState('win');
      setWins(wins => wins + 1);
    } else {
      //draw
      setGameState('draw');

    }

  }

  function renderComponent(choice) {
    const Component = choice.component;
    return <Component />
  }

  //1 . handle wins + losses
  //2 . determine the winner based on Choices
  //3 . reset the game

  return (
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>
        {/* this is where I started from before */}

        {/* wins vs losses stats */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">{wins}</span>
            <span className="text">{`Win${wins > 1 ? 's' : ''}`}</span>
          </div>

          <div className="losses">
            <span className="number">{losses}</span>
            <span className="text">{`Loss${losses > 1 ? 'es' : ''}`}</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/loss/draw */}
      {
        gameState && (
          <div className={`game-state ${gameState}`}>
            <div>
              <div className="game-state-content">
                <p>{renderComponent(userChoice)}</p>
                {/* <p> */}
                {/* You {gameState}! */}
                {/* </p> */}
                {gameState === 'win' && <p>Congrats You Won! </p>}
                {gameState === 'lose' && <p>Sorry You Lost! </p>}
                {gameState === 'draw' && <p>Its a Draw! </p>}
                <p>{renderComponent(computerChoice)}</p>
              </div>
              <button onClick={() => reStartGame()}>Play Again!</button>
            </div>
          </div>
        )}

      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button className="rock" onClick={() => handleUserChoice(1)}>
            <Rock />
          </button>
          <button className="paper" onClick={() => handleUserChoice(2)}>
            <Paper />
          </button>
          <button className="scissors" onClick={() => handleUserChoice(3)}>
            <Scissors />
          </button>
        </div >

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div >
    </div >
  );
}
