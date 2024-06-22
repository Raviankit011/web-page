import styles from "./frame3.module.css";

const Frame3 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.anAddressClassroom}>
        An Address. Classroom, Shop, Performance or Event Venue, Sports Arena,
        Play Area, Studio, School or Campus.
      </div>
      <div className={styles.groupWrapper}>
        <div className={styles.locationOnBlack24dp1Parent}>
          <img
            className={styles.locationOnBlack24dp1Icon}
            alt=""
            src="/location-on-black-24dp-11.svg"
          />
          <div className={styles.place}>Place</div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
