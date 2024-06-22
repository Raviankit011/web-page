import styles from "./frame1.module.css";

const Frame1 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.anIndividualOr}>
        An Individual or Organization. Teacher, Coach, Professional or Online
        Seller. Company, Business or Association.
      </div>
      <div className={styles.groupWrapper}>
        <div className={styles.groupsBlack24dp11Parent}>
          <img
            className={styles.groupsBlack24dp11}
            alt=""
            src="/groups-black-24dp-1-13.svg"
          />
          <div className={styles.people}>People</div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
