import React from "react";

// components
import Button from "../../Button";
import IconCard from "../IconCard";

// icons
import { IoTime } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiWifiOff } from "react-icons/bi";
import { BiWifi } from "react-icons/bi";
import { ImLocation } from "react-icons/im";

// constants
import { colors } from "../../../../constants/colors.constants";

// css
import styles from "../Cards.module.css";

const VolunteerDashboardCard = ({
  ActivityName,
  Activity_Description,
  Activity_Mode,
  ActivityDate,
  buttons,
  ActivityTime,
  ActivityDurationInMinutes,
  Activity_Location,
  Activity_Address,
  _id,
  onClick = () => {},
}) => {
  console.log("Activity Location", Activity_Address, Activity_Mode);
  return (
    <div className={styles.container} onClick={onClick}>
      <section
        className={`${styles.leftContainer} ${
          buttons && styles.leftContainerWidth
        }`}
      >
        <div>
          <h3 className={styles.title}>{ActivityName}</h3>
          <p className={styles.para}>{Activity_Description}</p>
        </div>
        <div className={styles.iconContainer}>
          {ActivityDate && (
            <IconCard
              icon={
                <BsCalendarDateFill size={25} color={colors.PRIMARY_GREEN} />
              }
              title="Date"
              detail={ActivityDate}
            />
          )}
          {ActivityTime && (
            <IconCard
              icon={<IoTime size={30} color={colors.PRIMARY_GREEN} />}
              title="Time"
              detail={ActivityTime}
            />
          )}
          {ActivityDurationInMinutes && (
            <IconCard
              icon={<GiSandsOfTime size={25} color={colors.PRIMARY_GREEN} />}
              title="Duration"
              detail={`${ActivityDurationInMinutes} mins`}
            />
          )}
          {Activity_Mode && (
            <IconCard
              icon={
                Activity_Mode.toLowerCase() === "online" ? (
                  <BiWifi size={25} color={colors.PRIMARY_GREEN} />
                ) : (
                  <BiWifiOff size={25} color={colors.PRIMARY_GREEN} />
                )
              }
              title="Mode"
              detail={Activity_Mode.toLowerCase() === "online" ? "Online" : "Offline"}
            />
          )}
        </div>
        {Activity_Mode === "offline" && (
          <div className={styles.locationStyler}>
            {Activity_Address && (
              <IconCard
                icon={<ImLocation size={25} color={colors.PRIMARY_GREEN} />}
                title="Location"
                detail={Activity_Address}
                customStyles={{
                  padding: "10px 10px",
                  marginRight: "0",
                  maxWidth: "25rem",
                }}
              />
            )}
          </div>
        )}
      </section>
      {buttons && (
        <section className={styles.rightContainer}>
          <div>
            {buttons.map((button, index) => (
              <Button
                key={index}
                {...button}
                id={_id}
                onClick={(e) => {
                  e.stopPropagation();
                  button.onClick();
                }}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default VolunteerDashboardCard;
