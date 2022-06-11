import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

const VolunteerDashboard = () => {
  const [apiData, setAPIData] = useState(null);
  const currUser = useSelector((state) => state.user);

  useEffect(() => {
    getVolunteerDashboardData(currUser.uid).then((data) => {
      console.table(data.data);
      setAPIData(data.data);
    });
  }, []);

  const buttons = [
    {
      value: "Accept",
      onClick: (e) => {
        e.preventDefault();
        console.log(e);
        volunteerAcceptsActivity(currUser.uid, e.target.id).then((data) => {
          if (data.status === 200) {
            showNotification({
              title: "Preference Updated",
              type: "success",
            });
            e.target.disabled = true;
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
        e.preventDefault();
        volunteerRejectsActivity(currUser.uid, e.target.id).then((data) => {
          if (data.status === 200) {
            showNotification({
              title: "Preference Updated",
              type: "success",
            });
            e.target.disabled = true;
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
    <div>
      <h1>Mapping for Activities</h1>
      <p>Please confirm your decision as soon as possible</p>
      {apiData !== null ? (
        apiData.map(
          (data, index) =>
            data && (
              <VolunteerDashboardCard key={index} buttons={buttons} {...data} />
            )
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default VolunteerDashboard;
