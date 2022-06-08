import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";

import { getUser } from "@selectors/user.selectors";
import Button from "@components/buttons/button";

import styles from "./styles.module.scss";
import { openConnectMetamaskModal } from "@actions/modals.actions";
import SmallPhotoWithText from "@components/small-photo-with-text";

const HeaderTopLine = ({ buttonText }) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const handleClick = () => {
    dispatch(openConnectMetamaskModal());
  };

  return (
    <div className={styles.headerWrapper}>
      {/* <Link href="/">
        <img src="/images/logo.png" className={styles.logo} />
      </Link> */}
      <div className={[styles.dFlex, styles.iconsLine].join(' ')}>
        <a href="https://www.tiktok.com/@f3manifesto" target="_blank" rel="noreferrer">
          <img
            src="/images/social/tiktok-icon.png"
            alt="tiktok-icon"
            className={styles.tiktokIcon}
          />
        </a>
        <a href="https://www.youtube.com/channel/UC5SOYiDrdooqNusoS5vrJAw" target="_blank" rel="noreferrer">
          <img
            src="/images/social/youtube-icon.png"
            alt="youtube-icon"
            className={styles.youtubeIcon}
          />
        </a>
        <a href="https://f3manifesto.medium.com/" target="_blank" rel="noreferrer">
          <img
            src="/images/social/medium-icon.png"
            alt="medium-icon"
            className={styles.mediumIcon}
          />
        </a>
        <a href="https://mirror.xyz/f3manifesto.eth" target="_blank" rel="noreferrer">
          <img
            src="/images/social/mirror.png"
            alt="mirror-icon"
            className={styles.mirrorIcon}
          />
        </a>
        <a href="https://twitter.com/f3manifesto" target="_blank" rel="noreferrer">
          <img
            src="/images/social/twitter-icon.png"
            alt="twitter-icon"
            className={styles.twitterIcon}
          /> 
        </a>
        <a href="https://docs.f3manifesto.xyz/" target="_blank" rel="noreferrer">
          <img
            src="/images/social/gitbook.png"
            alt="gitbook-icon"
            className={styles.gitbookIcon}
          /> 
        </a>
      </div>

      <div className={cn(styles.links, isCollapse ? styles.expandedMenu : "")}>
      <button
          className={styles.mobileBtn}
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>

        <div className={styles.menuBar}>
          {/* <a
            href="https://docs.f3manifesto.xyz/"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            DOCUMENTATION
          </a>
          <a
            href="https://web3fashionmanifesto.f3manifesto.xyz/manifesto/1/"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Web3 Fashion manifesto
          </a>

          <a
            href="https://mirror.xyz/f3manifesto.eth"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Sub-thread weekly
          </a>
          <a
            href="https://themanifest.f3manifesto.xyz/"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            young letters to a vc
          </a>
          <a
            href="https://web3cc0openlibrary.f3manifesto.xyz/"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Matic-Eth Bridge
          </a> */}

          {/* <div className={styles.signBtn}>
            {user ? (
              <div
                className={styles.buttonWrapper}
                onClick={() => setIsShowMenu(!isShowMenu)}
              >
                <SmallPhotoWithText
                  photo={
                    user.get("avatar")
                      ? user.get("avatar")
                      : "./images/user-profile/user-avatar-black.png"
                  }
                  address={user.get("username")}
                  className={styles.hashAddress}
                >
                  <button className={styles.arrowBottom}>
                    <img
                      className={styles.arrowBottomImg}
                      src="./images/icons/arrow-bottom.svg"
                      alt="arrow-bottom"
                    />
                  </button>
                </SmallPhotoWithText>
                {isShowMenu && (
                  <div className={styles.menuWrapper}>
                    <button
                      onClick={() => handleProfileClick()}
                      className={styles.menuButton}
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => handleManageInventory()}
                      className={styles.menuButton}
                    >
                      Manage Inventory
                    </button>
                    <button
                      onClick={() => handleLogoutClick()}
                      className={styles.menuButton}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                className={styles.signInButton}
                onClick={() => handleClick()}
              >
                {buttonText}
              </Button>
            )}
          </div> */}
          <a className={styles.button}>
            BRRRRRRRRRR
          </a>
        </div>
      </div>
    </div>
  );
};

HeaderTopLine.propTypes = {
  className: PropTypes.string,
  isShowStaking: PropTypes.bool,
  buttonText: PropTypes.string,
  linkText: PropTypes.string,
};

HeaderTopLine.defaultProps = {
  className: "",
  isShowStaking: false,
  buttonText: "SIGN IN",
};

export default HeaderTopLine;
