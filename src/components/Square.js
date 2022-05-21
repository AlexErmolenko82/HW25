import PropTypes from "prop-types";

const Square = ({ value, isWinner, onClick }) => (
  <button
    className={`square ${isWinner ? "square-win" : ""}`}
    onClick={onClick}
  >
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.oneOf(["X", "O", null]),
  isWinner: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Square;
