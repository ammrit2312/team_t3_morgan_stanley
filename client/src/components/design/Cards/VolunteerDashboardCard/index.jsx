import React from "react";

// components
import Button from "../../Button";
import IconCard from "../IconCard";

// assets
import { BsBookmarkCheckFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

// constants
import { colors } from "../../../../constants/colors.constants";

// css
import styles from "../Cards.module.css";

// icons
import { IoTime } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiWifiOff } from "react-icons/bi";
import { BiWifi } from "react-icons/bi";
import { ImLocation } from "react-icons/im";

/**
 *
 * @param {String} title Title of the activity
 * @param {String} description Description of the activity
 * @param {String} date Date of the activity
 * @param {String} time Time of the activity
 * @param {String} duration Duration of the activity
 * @param {String} mode Mode of the activity
 * @param {String} location Location of the activity
 * @param {Function} onAccept Function to be called when the user accepts the activity
 * @param {Function} onReject Function to be called when the user rejects the activity
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns {React.Component} Card for Volunteer Dashboard
 */

const VolunteerDashboardCard = ({
  title,
  description,
  date,
  time,
  duration,
  mode,
  location = "",
  onAccept, 
  onReject
}) => {
  return (
    <div className={styles.container}>
      <section className={styles.leftContainer}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.para}>
            {description}
          </p>
        </div>
        <div className={styles.iconContainer}>
          {/* <span>Time: 11am</span> */}
          <IconCard
            Icon={<BsCalendarDateFill size={25} color={colors.PRIMARY_GREEN} />}
            title="Date"
            detail={date}
          />
          <IconCard
            Icon={<IoTime size={30} color={colors.PRIMARY_GREEN} />}
            title="Time"
            detail={time}
          />
          <IconCard
            Icon={<GiSandsOfTime size={25} color={colors.PRIMARY_GREEN} />}
            title="Duration"
            detail={duration}
          />
          <IconCard
            Icon={
              mode === "online" ? (
                <BiWifi size={25} color={colors.PRIMARY_GREEN} />
              ) : (
                <BiWifiOff size={25} color={colors.PRIMARY_GREEN} />
              )
            }
            title="Mode"
            detail={mode === "online" ? "Online" : "Offline"}
          />
        </div>
        {mode === "offline" && (
          <div className={styles.locationStyler}>
            <IconCard
              Icon={<ImLocation size={25} color={colors.PRIMARY_GREEN} />}
              title="Location"
              detail={location}
              customStyles={{
                padding: "10px 10px",
                marginRight: "0",
                maxWidth: "25rem",
              }}
            />
          </div>
        )}
      </section>
      <section className={styles.rightContainer}>
        <div>
          <Button
            value={`Accept`}
            onClick={onAccept}
            customStyles={{
              backgroundColor: colors.PRIMARY_GREEN,
              borderRadius: "10px",
              border: "0",
              fontWeight: "bold",
              fontSize: "0.9rem",
              paddingY: "0.7rem",
              paddingX: "0.2rem",
            }}
            icon={<BsBookmarkCheckFill size={20} />}
          />
          <Button
            value={"Reject"}
            onClick={onReject}
            customStyles={{
              marginTop: "2rem",
              backgroundColor: colors.PRIMARY_RED,
              borderRadius: "10px",
              border: "0",
              fontSize: "0.9rem",
              paddingY: "0.7rem",
              paddingX: "0.2rem",
            }}
            icon={<ImCross size={18} />}
          />
        </div>
      </section>
    </div>
  );
};

export default VolunteerDashboardCard;
