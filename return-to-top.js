import PropTypes from "prop-types";
import styles from "./return-to-top.module.css";

const ReturnToTop = ({ className = "" }) => {
  return (
    <div className={[styles.returnToTop, className].join(" ")}>
      Return to top faeture(Default)
    </div>
  );
};

ReturnToTop.propTypes = {
  className: PropTypes.string,
};

export default ReturnToTop;
