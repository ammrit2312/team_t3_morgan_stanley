import React from 'react'
import styles from "./style.module.css";

const ContactUsCard = ({Email,Title,Message}) => {
  return (
    <div className={styles.container}>
        <h3>{Title}</h3>
        <h7><a href={`mailto:${Email}?Subject=${Title}`}>{Email}</a></h7>
        <p>{Message}</p>
    </div>
  )
}

export default ContactUsCard