import styles from "./frame2.module.css";

const Frame2 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.anItemThat}>
        An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher.
        Equipment, Instrument or Activity Kit.
      </div>
      <div className={styles.groupWrapper}>
        <div className={styles.basketCartEcommerceShoppingParent}>
          <img
            className={styles.basketCartEcommerceShoppingIcon}
            alt=""
            src="/5402359-basket-cart-ecommerce-shopping-buy-icon-11.svg"
          />
          <div className={styles.product}>Product</div>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
