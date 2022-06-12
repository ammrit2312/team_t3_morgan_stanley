import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

// css
import styles from "../Dashboards.module.css";

// components
import VolunteerDashboardCard from "../../../components/design/Cards/VolunteerDashboardCard";
import showNotification from "../../../utils/notifications.utils";

// constants
import { colors } from "../../../constants/colors.constants";

// icons
import { BsBookmarkCheckFill, BsStack } from "react-icons/bs";
import { ImCross } from "react-icons/im";


// api
import {
  getVolunteerDashboardData,
  volunteerAcceptsActivity,
  volunteerRejectsActivity,
} from "../../../api/volunteerDashboard.api";

import { deleteObject } from "../../../utils/deleteObject.utils";

const VolunteerDashboard = () => {
  const [apiData, setAPIData] = useState(null);
  const currUser = useSelector((state) => state.user);

  useEffect(() => {
    getVolunteerDashboardData(currUser.uid).then((data) => {
      console.log(data);
      setAPIData(data.data);
    });
  }, []);

  const buttons = [
    {
      value: "Accept",
      onClick: (e) => {
        volunteerAcceptsActivity(currUser.uid, e.target.id).then((data) => {
          if (data.status === 200) {
            showNotification({
              title: "Preference Updated",
              type: "success",
            });
            setAPIData(deleteObject(apiData, e.target.id));
          } else {
            showNotification({
              title: "Something went wrong",
              type: "error",
            });
          }
        });
      },
      icon: <BsBookmarkCheckFill size={20} />,
      customStyles: {
        backgroundColor: colors.PRIMARY_GREEN,
        borderRadius: "10px",
        border: "0",
        fontWeight: "bold",
        fontSize: "0.9rem",
        paddingY: "0.7rem",
        paddingX: "0.2rem",
      },
    },
    {
      value: "Reject",
      onClick: (e) => {
        volunteerRejectsActivity(currUser.uid, e.target.id).then((data) => {
          if (data.status === 200) {
            showNotification({
              title: "Preference Updated",
              type: "success",
            });
            setAPIData(deleteObject(apiData, e.target.id));
          } else {
            showNotification({
              title: "Something went wrong",
              type: "error",
            });
          }
        });
      },
      icon: <ImCross size={18} />,
      customStyles: {
        marginTop: "2rem",
        backgroundColor: colors.PRIMARY_RED,
        borderRadius: "10px",
        border: "0",
        fontSize: "0.9rem",
        paddingY: "0.7rem",
        paddingX: "0.2rem",
      },
    },
  ];

  // send onAccept and onReject to VolunteerDashboardCard
  return (
    <div className={styles.container}>
      <h1>Mapping for Activities</h1>
      {apiData !== null ? (
        apiData.message ? (
          <div>
            <p>
            {apiData.message}
            </p>
            <p>
              Visit <Link to="/volunteer/upcoming-activities/">Upcoming Activities</Link> for further details
            </p>
          </div>
        ) : (
          <div>
            {apiData.length === 1 && apiData[0] === null ? (
              <div>No activities mapped. Kindly visit after some time!</div>
            ) : (
              <div>
                <p>Please confirm your decision as soon as possible</p>
                {apiData.map(
                  (data, index) =>
                    data && (
                      <VolunteerDashboardCard
                        key={index}
                        buttons={buttons}
                        {...data}
                      />
                    )
                )}
              </div>
            )}
          </div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default VolunteerDashboard;