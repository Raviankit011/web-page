import styles from "./landing-page-join-in.module.css";

const LandingPageJoinIn = () => {
  return (
    <div className={styles.landingPageJoinIn}>
      <div className={styles.feature1}>
        <div className={styles.feature1Child} />
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupsBlack24dp11Parent}>
              <img
                className={styles.shoppingBasketBlack24dp2Icon}
                alt=""
                src="/groups-black-24dp-1-12.svg"
              />
              <div className={styles.people}>People</div>
            </div>
            <div className={styles.findATeacher}>
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </div>
            <div className={styles.connectWrapper}>
              <div className={styles.connect}>Connect</div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild} />
            <div className={styles.shoppingBasketBlack24dp2Parent}>
              <img
                className={styles.shoppingBasketBlack24dp2Icon}
                alt=""
                src="/shopping-basket-black-24dp-2-11.svg"
              />
              <div className={styles.people}>Product</div>
            </div>
            <div className={styles.findATeacher}>
              Find equipment or supplies required for your hobby. Buy, rent or
              borrow from shops, online stores or from community members.
            </div>
            <div className={styles.connectWrapper}>
              <div className={styles.getIt}>Get it</div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild} />
            <div className={styles.locationOnBlack24dp1Parent}>
              <img
                className={styles.shoppingBasketBlack24dp2Icon}
                alt=""
                src="/location-on-black-24dp-1.svg"
              />
              <div className={styles.people}>Place</div>
            </div>
            <div className={styles.findATeacher}>
              Find a class, school, playground, auditorium, studio, shop or an
              event venue. Book a slot at venues that allow booking through
              hobbycue.
            </div>
            <div className={styles.meetUpWrapper}>
              <div className={styles.meetUp}>Meet up</div>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.groupChild} />
            <div className={styles.eventAvailableBlack24dp2Parent}>
              <img
                className={styles.shoppingBasketBlack24dp2Icon}
                alt=""
                src="/program2.svg"
              />
              <div className={styles.people}>Program</div>
            </div>
            <div className={styles.findATeacher}>
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </div>
            <div className={styles.connectWrapper}>
              <div className={styles.attend}>Attend</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeScreen}>
        <div className={styles.homeScreenChild} />
        <div className={styles.groupContainer}>
          <div className={styles.parent}>
            <img className={styles.icon} alt="" src="/5793404-11.svg" />
            <img className={styles.icon1} alt="" src="/5793401-11.svg" />
          </div>
          <div className={styles.signInToInteractWithAComParent}>
            <div className={styles.signInToInteract}>
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </div>
            <div className={styles.ifYouAre}>
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </div>
            <i className={styles.exploreYourHobbyContainer}>
              <span>Explore your</span>
              <span className={styles.hobby}> hobby</span>
              <span>{` or `}</span>
              <span className={styles.passion}>passion</span>
            </i>
          </div>
        </div>
        <div className={styles.joinInForm}>
          <div className={styles.signinjoinin}>
            <div className={styles.signInParent}>
              <div className={styles.signIn}>Sign In</div>
              <div className={styles.groupChild1} />
            </div>
            <div className={styles.joinInParent}>
              <div className={styles.signIn}>Join In</div>
              <div className={styles.groupChild2} />
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.loginWithOtherAccountsParent}>
              <div className={styles.loginWithOtherAccounts}>
                <img
                  className={styles.googleIcon}
                  alt=""
                  src="/1298745-google-brand-branding-logo-network-icon-1.svg"
                />
                <div className={styles.meetUp}>Continue with Google</div>
              </div>
              <div className={styles.loginWithOtherAccounts1}>
                <img className={styles.googleIcon} alt="" src="/facebook.svg" />
                <div className={styles.meetUp}>Continue with Facebook</div>
              </div>
            </div>
            <div className={styles.connectWithSeparator}>
              <div className={styles.connectWithSeparatorChild} />
              <div className={styles.connectWithSeparatorItem} />
              <div className={styles.orConnectWith}>Or connect with</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.inputFieldsParent}>
                <div className={styles.inputFields}>
                  <div className={styles.email}>Email</div>
                </div>
                <div className={styles.component7}>
                  <div className={styles.passwordParent}>
                    <div className={styles.email}>Password</div>
                    <img
                      className={styles.googleIcon}
                      alt=""
                      src="/visibility-black-24dp-1.svg"
                    />
                  </div>
                  <div className={styles.rectangleParent1}>
                    <div className={styles.groupChild3} />
                    <div className={styles.groupChild4} />
                    <div className={styles.groupChild5} />
                    <div className={styles.passwordStrength}>
                      Password strength
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.byContinuingYouAgreeToOuParent}>
                <div className={styles.byContinuingYouContainer}>
                  <span>{`By continuing, you agree to our `}</span>
                  <span className={styles.termsOfService}>
                    Terms of Service
                  </span>
                  <span>{` and `}</span>
                  <span className={styles.termsOfService}>Privacy Policy</span>
                  <span>.</span>
                </div>
                <div className={styles.buttons}>
                  <div className={styles.meetUp}>Agree and Continue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.navbarChild} />
        <img
          className={styles.hobbycueLogoV21}
          alt=""
          src="/hobbycue-logo-v2-1@2x.png"
        />
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild6} />
          <div className={styles.searchHere}>Search here...</div>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild7} />
            <img
              className={styles.icons8Search1}
              alt=""
              src="/icons8-search-1.svg"
            />
          </div>
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.exploreParent}>
            <div className={styles.explore}>Explore</div>
            <img className={styles.exploreIcon} alt="" src="/explore1.svg" />
            <img
              className={styles.icons8ExpandArrow1}
              alt=""
              src="/icons8-expand-arrow-1.svg"
            />
          </div>
          <div className={styles.hobbiesParent}>
            <div className={styles.hobbies}>Hobbies</div>
            <img className={styles.exploreIcon} alt="" src="/hobbies1.svg" />
            <img
              className={styles.icons8ExpandArrow11}
              alt=""
              src="/icons8-expand-arrow-1.svg"
            />
            <div className={styles.hobbies1}>
              <img
                className={styles.hobbiesChild}
                alt=""
                src="/polygon-3.svg"
              />
              <img className={styles.hobbiesItem} alt="" src="/star-1.svg" />
            </div>
          </div>
          <img
            className={styles.bookmarkBlack24dp1Icon}
            alt=""
            src="/bookmark-black-24dp-1.svg"
          />
          <img
            className={styles.notificationsBlack24dp1Icon}
            alt=""
            src="/notifications-black-24dp-1.svg"
          />
          <img className={styles.product3Icon} alt="" src="/product-3.svg" />
          <div className={styles.groupWrapper}>
            <div className={styles.rectangleParent4}>
              <div className={styles.groupChild8} />
              <div className={styles.signIn1}>Sign In</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageJoinIn;
