import React from 'react'
import styles from './styles.module.css'
import image from '../../assets/images/404.svg'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <img src={image} alt="404 Image" />
    </div>
  )
}

export default NotFound