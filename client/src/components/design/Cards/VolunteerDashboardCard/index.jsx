import React from "react";

// components
import Button from "../../Button";

// constants
import { colors } from "../../../../constants/colors.constants";

// css
import styles from "../Cards.module.css";

/**
 *
 * @param {String} title Title of the activity
 * @param {String} description Description of the activity
 * @param {String} mode Mode of the activity
 * @param {Array} icons Array of Icons as React elements
 * @param {Array} otherCards Array of other set of cards
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns {React.Component} Card for Volunteer Dashboard
 */

const VolunteerDashboardCard = ({
  title,
  description,
  mode,
  icons,
  otherCards,
  buttons,
}) => {
  return (
    <div className={styles.container}>
      <section className={`${styles.leftContainer} ${buttons && styles.leftContainerWidth}`}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.para}>
            {description}
          </p>
        </div>
        {icons && <div className={styles.iconContainer}>
          {/* <span>Time: 11am</span> */}
          {icons.map((icon, index)=>(
            <div key={index}>
              {icon}
            </div>
          ))}
        </div>}
        {mode === "offline" && otherCards && (
          <div className={styles.locationStyler}>
            {otherCards.map((otherCard, index)=>(
              <div key={index}>
                {otherCard}
              </div>
            ))}
          </div>
        )}
      </section>
      {buttons && <section className={styles.rightContainer}>
        <div>
          {buttons.map((button, index) => (
            <Button
              key={index}
              {...button}
            />
          ))}
        </div>
      </section>}
    </div>
  );
};

export default VolunteerDashboardCard;
