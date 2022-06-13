import React from 'react'
import styles from "./style.module.css";

const NotificationCard = ({Notification_title,Notification_message}) => {
  return (
    <div className={styles.container}>
        <h3>{Notification_title}</h3>
        <p>{Notification_message}</p>
    </div>
  )
}

export default NotificationCard