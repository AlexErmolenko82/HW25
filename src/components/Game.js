import { useState } from "react";

import calculateWinner from "../helpers/calculateWinner";
import Board from "./Board";
import GameInfo from "./GameInfo";

const Game = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null)
    }
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (index) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current.squares];

    const isWinner = calculateWinner(squares);
    if (squares[index] || isWinner) {
      return;
    }

    squares[index] = xIsNext ? "X" : "O";

    setHistory([
      ...newHistory,
      {
        squares
      }
    ]);
    setStepNumber(newHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => () => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
    document.querySelectorAll(".square-win").forEach(list => { // remove winner squares
      list.classList.remove("square-win");
      });
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares); // winner is Array

  let status;
  if (winner) {
    status = `Winner: ${winner[0]}`;
    // mark winner squares
    document.getElementById(winner[1]).classList.add("square-win");
    document.getElementById(winner[2]).classList.add("square-win");
    document.getElementById(winner[3]).classList.add("square-win");

  } else
        if (stepNumber > 8) {
            status = `Dead heat, no winner!`;
        }
            else {
                status = `Next player: ${xIsNext ? "X" : "O"}`;
            }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
        <GameInfo status = {status} history = {history} jumpTo = {jumpTo} />
    </div>
  );
};

export default Game;
