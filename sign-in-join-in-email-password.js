import styles from "./sign-in-join-in-email-password.module.css";

const SignInJoinInEmailPassword = () => {
  return (
    <div className={styles.signInJoinInEmailPassword}>
      <div className={styles.signInJoinInEmailPasswordInner}>
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
          <div className={styles.checkboxParent}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxChild} />
            </div>
            <div className={styles.rememberMe}>Remember me</div>
          </div>
          <div className={styles.lockBlack24dp1Parent}>
            <img
              className={styles.lockBlack24dp1Icon}
              alt=""
              src="/lock-black-24dp-1.svg"
            />
            <div className={styles.forgotPassword}>Forgot password?</div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild1} />
            <div className={styles.continue}>Continue</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.groupChild2} />
            <div className={styles.groupChild3} />
            <div className={styles.orConnectWith}>Or connect with</div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild4} />
            <div className={styles.continueWithGoogle}>
              Continue with Google
            </div>
            <img
              className={styles.googleBrandBrandingLogoNetIcon}
              alt=""
              src="/1298745-google-brand-branding-logo-network-icon-1.svg"
            />
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild4} />
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

export default SignInJoinInEmailPassword;
