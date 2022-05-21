import PropTypes from "prop-types";

const Square = ({ value, winValue, onClick }) => (
  <button className={`square ${(value && winValue) ? "square-win" : ""}`} onClick={onClick}>
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.oneOf(["X", "O", null]),
  onClick: PropTypes.func.isRequired
};

export default Square;
