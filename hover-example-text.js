import PropTypes from "prop-types";
import styles from "./hover-example-text.module.css";

const HoverExampleText = ({ className = "" }) => {
  return (
    <div className={[styles.hoverExample, className].join(" ")}>
      Hover Example
    </div>
  );
};

HoverExampleText.propTypes = {
  className: PropTypes.string,
};

export default HoverExampleText;
