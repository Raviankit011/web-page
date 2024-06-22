import PropTypes from "prop-types";
import styles from "./hover-text.module.css";

const HoverText = ({ className = "" }) => {
  return <div className={[styles.hover, className].join(" ")}>Hover</div>;
};

HoverText.propTypes = {
  className: PropTypes.string,
};

export default HoverText;
