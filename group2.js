import styles from "./group2.module.css";

const Group2 = () => {
  return (
    <div className={styles.ellipseParent}>
      <div className={styles.groupChild} />
      <img
        className={styles.arrowForwardIosBlack24dp1Icon}
        alt=""
        src="/arrow-forward-ios-black-24dp-1@2x.png"
      />
    </div>
  );
};

export default Group2;
