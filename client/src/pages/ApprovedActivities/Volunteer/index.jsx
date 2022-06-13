import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../ApprovedActivities.module.css";

// utils
import showNotification from "../../../utils/notifications.utils";

// components
import VolunteerDashboardCard from "../../../components/design/Cards/VolunteerDashboardCard";

// constants
import { colors } from "../../../constants/colors.constants";

// icons
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { ImCross } from "react-icons/im";

// api
import {
  getVolunteerUpcomingActivities,
  getAdminNumber,
  volunteerOptsOut,
  volunteerReallocation
} from "../../../api/volunteerDashboard.api";

function VolunteerApprovedActivities() {
  const currUser = useSelector((state) => state.user);
  const [apiData, setAPIData] = useState(null);

  useEffect(() => {
    getVolunteerUpcomingActivities(currUser.uid).then((data) => {
      console.log(data);
      setAPIData(data.data);
    });
  }, []);

  const buttons = [
    {
      value: "Talk to Admin",
      onClick: () => {
        // window.open(`https://wa.me/+919108085826`);
        getAdminNumber().then((res) => {
          if (res.status === 200 && res.data.message.length > 0) {
            window.open(`https://wa.me/+91${res.data}`);
          } else {
            showNotification({
              type: "danger",
              message: "Admin number not found",
            });
          }
        });
      },
      icon: <BsWhatsapp size={20} />,
      customStyles: {
        backgroundColor: colors.PRIMARY_GREEN,
        borderRadius: "10px",
        border: "0",
        fontWeight: "bold",
        fontSize: "0.9rem",
        paddingY: "0.7rem",
        paddingX: "0.2rem",
        width: "2rem",
      },
    },
    {
      value: "Cancel",
      onClick: (e) => {
        volunteerOptsOut(e.target.id, currUser.uid).then((res) => {
          if (res.status === 200) {
            showNotification({
              type: "success",
              message: "Activity cancelled successfully",
            });
            volunteerReallocation(e.target.id);
          } else {
            showNotification({
              type: "danger",
              message: "Something went wrong",
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
        width: "2rem",
      },
    },
  ];

  return (
    <div>
      <h1>Upcoming Activities</h1>
      {apiData !== null ? (
        apiData.message ? (
          <p style={{ textTransform: "capitalize" }}>{apiData.message}</p>
        ) : (
          <div>
            {apiData.length === 1 && apiData[0] === null ? (
              <div>No activities mapped. Kindly visit after some time!</div>
            ) : (
              <div>
                <p>These are your upcoming activities</p>
                {apiData.map((data, index) => (
                  <VolunteerDashboardCard
                    key={index}
                    buttons={buttons}
                    {...data}
                  />
                ))}
              </div>
            )}
          </div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default VolunteerApprovedActivities;
