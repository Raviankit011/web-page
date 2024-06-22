import styles from "./landing-page-sign-in.module.css";

const LandingPageSignIn = () => {
  return (
    <div className={styles.landingPageSignIn}>
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
            <div className={styles.getItWrapper}>
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
              <div className={styles.getIt}>Meet up</div>
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
            <div className={styles.attendWrapper}>
              <div className={styles.getIt}>Attend</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonials}>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild1} />
          <div className={styles.areYouA}>
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </div>
          <div className={styles.addYourOwnParent}>
            <div className={styles.addYourOwn}>Add your own</div>
            <img className={styles.addIcon} alt="" src="/add2.svg" />
          </div>
          <div className={styles.addNewWrapper}>
            <div className={styles.addNew}>Add new</div>
          </div>
        </div>
      </div>
      <div className={styles.testimonials1}>
        <div className={styles.frameDiv}>
          <div className={styles.instanceChild} />
          <div className={styles.groupContainer}>
            <div className={styles.addYourOwnGroup}>
              <div className={styles.people}>Add your own</div>
              <img
                className={styles.shoppingBasketBlack24dp2Icon}
                alt=""
                src="/add1.svg"
              />
            </div>
            <div className={styles.areYouA1}>
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </div>
            <div className={styles.addNewContainer}>
              <div className={styles.getIt}>Add new</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.end}>
        <div className={styles.endChild} />
        <div className={styles.parent}>
          <img className={styles.icon} alt="" src="/5820098-11.svg" />
          <img className={styles.icon1} alt="" src="/5820000-11.svg" />
        </div>
        <div className={styles.yourHobbyYourCommunityParent}>
          <i className={styles.yourHobbyYourContainer}>
            <span>{`Your `}</span>
            <span className={styles.hobby}>Hobby</span>
            <span>{`, Your `}</span>
            <span className={styles.community}>Community...</span>
          </i>
          <div className={styles.getStartedWrapper}>
            <div className={styles.getStarted}>Get started</div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.groupParent1}>
          <div className={styles.quickLinksParent}>
            <b className={styles.quickLinks}>Quick Links</b>
            <div className={styles.listings}>Listings</div>
            <div className={styles.blogPosts}>Blog Posts</div>
            <div className={styles.shopStore}>Shop / Store</div>
            <div className={styles.faq}>Community</div>
          </div>
          <div className={styles.hobbycueParent}>
            <b className={styles.quickLinks}>Hobbycue</b>
            <div className={styles.listings}>About Us</div>
            <div className={styles.blogPosts}>Our Services</div>
            <div className={styles.shopStore}>Work with Us</div>
            <div className={styles.faq}>FAQ</div>
            <div className={styles.contactUs}>Contact Us</div>
          </div>
          <div className={styles.howDoIParent}>
            <b className={styles.quickLinks}>How Do I</b>
            <div className={styles.listings}>Sign Up</div>
            <div className={styles.blogPosts}>Add a Listing</div>
            <div className={styles.shopStore}>Claim Listing</div>
            <div className={styles.faq}>Post a Query</div>
            <div className={styles.contactUs}>Add a Blog Post</div>
            <div className={styles.otherQueries}>Other Queries</div>
          </div>
          <div className={styles.groupParent2}>
            <div className={styles.inviteFriendsParent}>
              <b className={styles.quickLinks}>Invite Friends</b>
              <div className={styles.rectangleParent2}>
                <div className={styles.groupChild2} />
                <div className={styles.groupChild3} />
                <div className={styles.invite}>Invite</div>
                <div className={styles.emailId}>Email ID</div>
              </div>
            </div>
            <div className={styles.socialMediaParent}>
              <b className={styles.quickLinks}>Social Media</b>
              <div className={styles.groupParent3}>
                <img className={styles.groupIcon} alt="" src="/group-61.svg" />
                <img
                  className={styles.groupChild4}
                  alt=""
                  src="/group-60.svg"
                />
                <img
                  className={styles.groupChild5}
                  alt=""
                  src="/group-62.svg"
                />
                <img
                  className={styles.groupChild6}
                  alt=""
                  src="/group-63.svg"
                />
                <img
                  className={styles.groupChild7}
                  alt=""
                  src="/group-59.svg"
                />
                <img
                  className={styles.groupChild8}
                  alt=""
                  src="/group-58.svg"
                />
                <img
                  className={styles.groupChild9}
                  alt=""
                  src="/group-57.svg"
                />
                <img
                  className={styles.groupChild10}
                  alt=""
                  src="/group-56.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild11} />
          <div className={styles.purpleCuesPrivate}>
            © Purple Cues Private Limited
          </div>
        </div>
      </div>
      <div className={styles.testimonials2}>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild12} />
          <div className={styles.groupWrapper}>
            <div className={styles.testimonialsParent}>
              <div className={styles.people}>Testimonials</div>
              <img className={styles.quoteIcon} alt="" src="/quote@2x.png" />
            </div>
          </div>
          <div className={styles.inAFast}>
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-12@2x.png"
            />
            <div className={styles.shubhaNagarajanParent}>
              <div className={styles.shubhaNagarajan}>Shubha Nagarajan</div>
              <div className={styles.classicalDancer}>Classical Dancer</div>
            </div>
          </div>
          <div className={styles.audioTrack}>
            <div className={styles.audioTrackChild} />
            <div className={styles.audioTrackItem} />
            <img
              className={styles.playArrowBlack24dp1Icon}
              alt=""
              src="/play-arrow-black-24dp-1.svg"
            />
            <div className={styles.audioTrackInner} />
            <div className={styles.ellipseDiv} />
            <img
              className={styles.audioTrackChild1}
              alt=""
<<<<<<< HEAD
              src="/ellipse-12@2x.png"
=======
              src="/ellipse-121@2x.png"

>>>>>>> Incoming
            />
            <img
              className={styles.micBlack24dp1Icon}
              alt=""
              src="/mic-black-24dp-1.svg"
            />
            <div className={styles.div}>0:00</div>
          </div>
        </div>
      </div>
      <img
        className={styles.landingPageSignInChild}
        alt=""
        src="/group-77.svg"
      />
      <div className={styles.homeScreen}>
        <div className={styles.homeScreenChild} />
        <div className={styles.groupParent4}>
          <div className={styles.group}>
            <img className={styles.icon2} alt="" src="/5793404-11.svg" />
            <img className={styles.icon3} alt="" src="/5793401-11.svg" />
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
              <span className={styles.community}> hobby</span>
              <span>{` or `}</span>
              <span className={styles.hobby}>passion</span>
            </i>
          </div>
        </div>
        <div className={styles.signInForm}>
          <div className={styles.signinjoinin}>
            <div className={styles.signInParent}>
              <div className={styles.signIn}>Sign In</div>
              <div className={styles.groupChild13} />
            </div>
            <div className={styles.joinInParent}>
              <div className={styles.signIn}>Join In</div>
              <div className={styles.groupChild14} />
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
                <div className={styles.getIt}>Continue with Google</div>
              </div>
              <div className={styles.loginWithOtherAccounts1}>
                <img className={styles.googleIcon} alt="" src="/facebook.svg" />
                <div className={styles.getIt}>Continue with Facebook</div>
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
                  <div className={styles.email}>Password</div>
                  <img
                    className={styles.googleIcon}
                    alt=""
                    src="/password.svg"
                  />
                </div>
              </div>
              <div className={styles.groupParent5}>
                <div className={styles.groupParent6}>
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
                      src="/lock-black-24dp-11.svg"
                    />
                    <div className={styles.forgotPassword}>
                      Forgot password?
                    </div>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <div className={styles.getIt}>Continue</div>
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
        <div className={styles.rectangleParent5}>
          <div className={styles.groupChild15} />
          <div className={styles.searchHere}>Search here...</div>
          <div className={styles.rectangleParent6}>
            <div className={styles.groupChild16} />
            <img
              className={styles.icons8Search1}
              alt=""
              src="/icons8-search-1.svg"
            />
          </div>
        </div>
        <div className={styles.groupParent7}>
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
          <div className={styles.groupFrame}>
            <div className={styles.rectangleParent7}>
              <div className={styles.groupChild17} />
              <div className={styles.signIn1}>Sign In</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageSignIn;
