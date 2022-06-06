import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'

import Button from '@components/Button'
import { getAccount } from '@selectors/user.selectors'
import { getChainId } from '@selectors/global.selectors'
// import {
//   openConnectMetamaskModal,
//   openSignupModal,
//   openCryptoOptionsModal,
//   openSwitchNetworkModal
// } from '@actions/modals.actions'
import { getUser } from '@helpers/user.helpers'
// import {
//   POLYGON_CHAINID
// } from '@constants/global.constants'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import styles from './styles.module.scss'
import MintSection from '@components/homepage/MintSection'
import AboutSection from '@components/homepage/AboutSection'
import CollectionSection from '@components/homepage/CollectionSection'
import ShopSection from '@components/homepage/ShopSection'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

function Landing(props) {
  const screenWidth = useWindowDimensions().width
  const [isMobile, setIsMobile] = useState(false)
  const account = useSelector(getAccount)
  const chainId = useSelector(getChainId)
  const user = useSelector(getUser)
  const dispatch = useDispatch()
   
  useEffect(() => {
    screenWidth > 707 ? setIsMobile(false) : setIsMobile(true)
  }, [screenWidth])

  const setParallaxTrigger = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#background", {
      y: (i, target) => {
        return -target.offsetHeight;
      },
      ease: "none",
      scrollTrigger: {
        trigger: "#wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });
  }

  useEffect(() => {

    if (typeof window !== "undefined") {
      console.log('here')
    }
  }, []);


  return (
    <>
      {
      // !isMobile ? 
      (
        <div className={styles.wrapper} id='wrapper'>
          <div className={styles.background} id='background'>
            <img src='/images/homepage/background.png' onLoad={setParallaxTrigger} />
          </div>
          <section className={styles.mintSection}>
            <MintSection />
          </section>
          <section className={styles.aboutSection}>
            <AboutSection />
          </section>
          <section className={styles.collectionSection}>
            <CollectionSection />
          </section>
          <section className={styles.shopSection}>
            <ShopSection />
          </section>
        </div>
      )
      }
    </>
  )
}

export default Landing
