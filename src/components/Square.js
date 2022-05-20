import PropTypes from "prop-types";

const Square = ({ value, id, onClick }) => (
  <button id = {id} className="square" onClick={onClick}>
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.oneOf(["X", "O", null]),
  onClick: PropTypes.func.isRequired
};

export default Square;
