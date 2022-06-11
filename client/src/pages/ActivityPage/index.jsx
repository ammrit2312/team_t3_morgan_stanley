import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./ActivityPage.module.css";

// components
import Chip from "../../components/design/Chip";

// api
// import { getUserData } from "../../api/userDetails.api";

// data
import { activityToDisplayValue } from "../../constants/apiData.constants";

const ActivityPage = () => {
  const currUser = useSelector((state) => state.user);
  const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     getUserData(currUser.uid).then((res) => {
//       setUserData(res.data);
//     });
//   }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Profile Page</h1>
      <div className={styles.detailsContainer}>
        {userData !== null ? (
          Object.keys(userData).map((key, index) => {
            return (
              key !== "ActivityID" && (
                <div key={index} className={styles.detail}>
                  <span className={styles.key}>{activityToDisplayValue[key]}</span> :{" "}
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
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ActivityPage;
