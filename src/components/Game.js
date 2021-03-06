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
    if (squares[index] || isWinner.info) {
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
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares); // winner is object

  let status;
  if (winner.info) {
    status = `Winner: Player ${winner.info}`;
  } else if (stepNumber < 9) {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  } else {
    status = `Draw result, no winner!`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          winnerLine={winner.line}
          onClick={handleClick}
        />
      </div>
      <GameInfo status={status} history={history} jumpTo={jumpTo} />
    </div>
  );
};

export default Game;
