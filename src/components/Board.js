import PropTypes from "prop-types";

import Square from "./Square";

const Board = ({ squares, winnerLine, onClick }) => {
  const renderSquare = (index) => {
    return (
      <Square
        value={squares[index]}
        isWinner={winnerLine?.includes(index)} // check win index in array
        onClick={() => onClick(index)}
      />
    );
  };
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.oneOf(["X", "O", null])).isRequired,
  winnerLine: PropTypes.arrayOf(PropTypes.number),
  onClick: PropTypes.func.isRequired,
};

export default Board;
