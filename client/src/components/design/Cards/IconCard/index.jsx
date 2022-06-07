import React from "react";

// css
import styles from "../Cards.module.css";

/**
 * @param {String} title Title of the card
 * @param {React.Component} Icon Icon to be displayed in the card
 * @param {String} detail Detail of the card
 * @param {Object} customStyles Styles for the card div if required
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns {React.Component} Card for Icons
 */

const IconCard = ({ title, Icon, detail, customStyles = {} }) => {
  return (
    <div className={styles.iconContain} style={customStyles}>
      {Icon}
      <div className={styles.iconTitle}>{title}</div>
      <p className={styles.iconDetails}>{detail}</p>
    </div>
  );
};

export default IconCard;
