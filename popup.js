import styles from "./popup.module.css";

const Popup = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <div className={styles.groupParent}>
          <div className={styles.groupContainer}>
            <div className={styles.signInParent}>
              <div className={styles.signIn}>Sign In</div>
              <div className={styles.groupChild} />
            </div>
            <div className={styles.joinInParent}>
              <div className={styles.signIn}>Join In</div>
              <div className={styles.groupItem} />
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.email}>Email</div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.email}>Password</div>
            <img
              className={styles.visibilityBlack24dp1Icon}
              alt=""
              src="/visibility-black-24dp-1.svg"
            />
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild1} />
            <div className={styles.groupChild2} />
            <div className={styles.groupChild3} />
            <div className={styles.passwordStrength}>Password strength</div>
          </div>
          <div className={styles.byContinuingYouContainer}>
            <span>{`By continuing, you agree to our `}</span>
            <span className={styles.termsOfService}>Terms of Service</span>
            <span>{` and `}</span>
            <span className={styles.termsOfService}>Privacy Policy</span>
            <span>.</span>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.groupChild4} />
            <div className={styles.continue}>Continue</div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild5} />
            <div className={styles.groupChild6} />
            <div className={styles.orConnectWith}>Or connect with</div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild7} />
            <div className={styles.continueWithGoogle}>
              Continue with Google
            </div>
            <img
              className={styles.googleBrandBrandingLogoNetIcon}
              alt=""
              src="/1298745-google-brand-branding-logo-network-icon-1.svg"
            />
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild7} />
            <div className={styles.continueWithFacebook}>
              Continue with Facebook
            </div>
            <img
              className={styles.googleBrandBrandingLogoNetIcon}
              alt=""
              src="/5296499-fb-facebook-facebook-logo-icon-1.svg"
            />
          </div>
        </div>
      </div>
      <img className={styles.popupNavBar} alt="" src="/popup-nav-bar.svg" />
    </div>
  );
};

export default Popup;
