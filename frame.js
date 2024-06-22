import styles from "./frame.module.css";

<<<<<<< HEAD
const Frame = () => {
=======
const Frame5 = () => {

>>>>>>> Incoming
  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameGroup}>
          <div className={styles.groupsBlack24dp11Parent}>
            <img
              className={styles.placeIcon}
              alt=""
              src="/groups-black-24dp-1-11.svg"
            />
            <div className={styles.people}>People</div>
          </div>
          <div className={styles.anIndividualOr}>
            An Individual or Organization. Teacher, Coach, Professional or
            Online Seller. Company, Business or Association.
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <div className={styles.frameGroup}>
          <div className={styles.groupsBlack24dp11Parent}>
            <img className={styles.placeIcon} alt="" src="/place1.svg" />
            <div className={styles.people}>Place</div>
          </div>
          <div className={styles.anIndividualOr}>
            An Address. Classroom, Shop, Performance or Event Venue, Sports
            Arena, Play Area, Studio, School or Campus.
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameInner} />
        <div className={styles.frameGroup}>
          <div className={styles.groupsBlack24dp11Parent}>
            <img className={styles.placeIcon} alt="" src="/product-21.svg" />
            <div className={styles.people}>Product</div>
          </div>
          <div className={styles.anIndividualOr}>
            An Item that you can Book, Buy or Rent. Appointment, Ticket, or
            Voucher. Equipment, Instrument or Activity Kit.
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameGroup}>
          <div className={styles.groupWrapper}>
            <div className={styles.programParent}>
              <img className={styles.programIcon} alt="" src="/program1.svg" />
              <div className={styles.program}>Program</div>
            </div>
          </div>
          <div className={styles.anIndividualOr}>
            An Event with Venue and Date. Meetup, Workshop or Webinar.
            Exhibition, Performance or Competition.
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Frame;
=======
export default Frame5;

>>>>>>> Incoming
