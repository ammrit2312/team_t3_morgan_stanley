import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./ActivityPage.module.css";

// components
import Chip from "../../components/design/Chip";

// api
// import { getUserData } from "../../api/userDetails.api";

// data
import { activityToDisplayValue } from "../../constants/apiData.constants";

const ActivityPage = () => {
  const { activityId } = useParams();
  const currUser = useSelector((state) => state.user);
  const [userData, setUserData] = useState(null);

  //   useEffect(() => {
  //     getUserData(currUser.uid).then((res) => {
  //       setUserData(res.data);
  //     });
  //   }, []);
  useEffect(() => {
    const data = {
      ActivityID: "62a0f5d7436c9b1f5f1914f0",
      ActivityName: "translating",
      ActivityType: ["play"],
      ActivityDate: "09/06/2022",
      ActivityTime: "4:30 Pm",
      ActivityDurationInMinutes: 60,
      Activity_Location: ["navi mumbai"],
      Activity_Mode: "offline",
      Language_Preference: ["hindi", "tamil"],
      Activity_availability: ["weekend"],
      Preferred_skills: [],
      Current_assigned: 0,
      Max_volunteers: 3,
      Activity_Address: "Gokuldham Society, Mumbai",
      Activity_Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor, aliquid tenetur quas tempore repudiandae beatae provident explicabo omnis dolore.",
      Activity_Attendance: [],
      // AssignedTo: "Assigned To",
    };
    setUserData(data);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Activity Information</h1>
      <div className={styles.detailsContainer}>
        {userData !== null ? (
          <div>
            {Object.keys(userData).map((key, index) => {
              return (
                key !== "ActivityID" && (
                  <div key={index} className={styles.detail}>
                    <span className={styles.key}>
                      {activityToDisplayValue[key]}
                    </span>{" "}
                    :{" "}
                    <span className={styles.value}>
                      {Array.isArray(userData[key]) ? (
                        <Chip data={userData[key]} />
                      ) : (
                        userData[key]
                      )}
                    </span>
                  </div>
                )
              );
            })}
            {/*2 table*/}
            {userData.Preferred_Users.length > 0 && (
              <div></div>
            )}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ActivityPage;
