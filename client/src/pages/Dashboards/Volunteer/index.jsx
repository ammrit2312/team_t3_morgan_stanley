import React from "react";

// css
import styles from "../Dashboards.module.css";

// components
import VolunteerDashboardCard from "../../../components/design/Cards/VolunteerDashboardCard";
import IconCard from "../../../components/design/Cards/IconCard";

// constants
import { colors } from "../../../constants/colors.constants";
import { testData } from "../../../constants/test.constants";

// icons
import { BsBookmarkCheckFill, BsStack } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { IoTime } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiWifiOff } from "react-icons/bi";
import { BiWifi } from "react-icons/bi";
import { ImLocation } from "react-icons/im";

const VolunteerDashboard = () => {
  const buttons = [
    {
      value: "Accept",
      onClick: () => {},
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
      },
    },
  ];

  // send onAccept and onReject to VolunteerDashboardCard

  return (
    <div>
      <h1>Mapping for Activities</h1>
      <p>Please confirm your decision as soon as possible</p>
      {testData.map((data, index) => (
        <VolunteerDashboardCard key={index} buttons={buttons} {...data} />
      ))}
    </div>
  );
};

export default VolunteerDashboard;
