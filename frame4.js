import styles from "./frame4.module.css";

const Frame4 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.anEventWith}>
        An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition,
        Performance or Competition.
      </div>
      <div className={styles.groupWrapper}>
        <div className={styles.groupParent}>
          <div className={styles.programParent}>
            <img className={styles.programIcon} alt="" src="/program3.svg" />
            <div className={styles.people}>People</div>
          </div>
          <div className={styles.program}>Program</div>
        </div>
      </div>
    </div>
  );
};

export default Frame4;
