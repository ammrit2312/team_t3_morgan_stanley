import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// components
import VolunteerDashboardCard from "../../../components/design/Cards/VolunteerDashboardCard";

// constants
import { colors } from "../../../constants/colors.constants";

// icons
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { ImCross } from "react-icons/im";

// api
import { getVolunteerUpcomingActivities } from "../../../api/volunteerDashboard.api";

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
      onClick: () => {},
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
      value: "Join the Whatsapp group",
      onClick: () => {},
      icon: <AiOutlineUsergroupAdd size={20} />,
      customStyles: {
        backgroundColor: colors.PRIMARY_BLUE_DARK,
        borderRadius: "10px",
        border: "0",
        fontSize: "0.9rem",
        paddingY: "0.7rem",
        paddingX: "0.2rem",
        marginTop: "2rem",
        width: "2rem",
      },
    },
    {
      value: "Cancel",
      onClick: () => {},
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
      <p>These are your upcoming activities</p>
      {apiData !== null &&
        apiData.map((data, index) => (
          <VolunteerDashboardCard key={index} buttons={buttons} {...data} />
        ))}
    </div>
  );
}

export default VolunteerApprovedActivities;
