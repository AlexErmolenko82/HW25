import PropTypes from "prop-types";

const GameInfo = ( {history, status, jumpTo} ) => {
   
return (
<div className="game-info">
        <div>{status}</div>
        <ol>
          {history.map((step,  index) => {
            const isStartStep = index === 0;
            return (
              <li key={index}>
                <button onClick={jumpTo(index)}>
                  {isStartStep ? `Go to game start` : `Go to move #${index}`}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
};

GameInfo.propTypes = {
    history: PropTypes.arrayOf(PropTypes.shape({
        squares: PropTypes.arrayOf(PropTypes.oneOf(["X", "O", null]))
    })).isRequired,
    status: PropTypes.string.isRequired,
    jumpTo: PropTypes.func.isRequired
  };

export default GameInfo;