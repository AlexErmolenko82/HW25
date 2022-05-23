import { useState } from "react";

import calculateWinner from "../helpers/calculateWinner";
import Board from "./Board";
import GameInfo from "./GameInfo";

const Game = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (index) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current.squares];

    const isWinner = calculateWinner(squares);
    if (squares[index] || isWinner.winner) {
      return;
    }

    squares[index] = xIsNext ? "X" : "O";

    setHistory([
      ...newHistory,
      {
        squares,
      },
    ]);
    setStepNumber(newHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => () => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
    winner.winner = false;
    winner.line = []; // refresh win obj after jump
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares); // winner is object

  let status;
  if (winner.winner) {
    status = `Winner: Player ${winner.winner}`;
  } else if (stepNumber < 9) {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  } else {
    status = `Dead heat, no winner!`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          winnerLine={winner.winner ? winner.line : []}
          onClick={handleClick}
        />
      </div>
      <GameInfo status={status} history={history} jumpTo={jumpTo} />
    </div>
  );
};

export default Game;
