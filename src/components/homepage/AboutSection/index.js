import React from 'react'
import styles from './styles.module.scss'

const AboutSection = () => {
  return (
    <div className={styles.aboutWrapper}>
      <h1>
        About
      </h1>
      <div className={styles.description}>
        Pocket Fashion Printers is a web3 community skating at the edge of what a PFP can be. Entirely CC0, do whatever you want. Where no utility meets all utility.
      </div>
    </div>
  )
}

export default AboutSection