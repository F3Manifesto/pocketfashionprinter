import React from 'react'
import styles from './styles.module.scss'

const ShopSection = () => {
  return (
    <div className={styles.shopWrapper}>
      <h1>
       Pocket Tailor. Alterations to Go.
      </h1>
      <img src='/images/homepage/tailorshop.svg' />
    </div>
  )
}

export default ShopSection