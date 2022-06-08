import React from 'react'
import styles from './styles.module.scss'

const CollectionSection = () => {
  return (
    <div className={styles.collectionWrapper}>
      <h1>
        Composable Closet Collections
      </h1>
      
      <div className={styles.bottomPart}>
        <div className={styles.description}>
          Stock your inventory with the latest NFT drip, digital and physical. Using FGO from DIGITALAX.
        </div>
        <img src='/images/homepage/closetfemale.gif' />
      </div>
    </div>
  )
}

export default CollectionSection