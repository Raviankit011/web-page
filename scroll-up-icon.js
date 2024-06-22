import PropTypes from "prop-types";
import styles from "./scroll-up-icon.module.css";

const ScrollUpIcon = ({ className = "" }) => {
  return (
    <div className={[styles.scrollUpIcon, className].join(" ")}>
      Scroll up icon should be there throughout the application.
    </div>
  );
};

ScrollUpIcon.propTypes = {
  className: PropTypes.string,
};

export default ScrollUpIcon;
