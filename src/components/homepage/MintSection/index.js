import React from 'react'
import styles from './styles.module.scss'

const MintSection = props => {
  const {
    price=0.15,
    currentMint=0,
    totalMint=33000
  } = props
  return (
    <div className={styles.mintWrapper}>
      <h1>
        Pocket Fashion Printers
      </h1>
      <h2>
        Printing this CC0 Summer.
      </h2> 
      <div className={styles.mintForm}>
      <img className={styles.factory} src='/images/homepage/Group 186.png'/>
      </div>
      <div className={styles.love}>
        <img src='/images/homepage/cc0-heart.png'/> made with love with cc0
      </div>
    </div>
  )
}

export default MintSection