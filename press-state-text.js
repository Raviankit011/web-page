import PropTypes from "prop-types";
import styles from "./press-state-text.module.css";

const PressStateText = ({ className = "" }) => {
  return (
    <div className={[styles.pressState, className].join(" ")}>Press state</div>
  );
};

PressStateText.propTypes = {
  className: PropTypes.string,
};

export default PressStateText;
