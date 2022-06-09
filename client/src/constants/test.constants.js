import React from "react";

import { IoTime } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiWifiOff } from "react-icons/bi";
import { BiWifi } from "react-icons/bi";
import { ImLocation } from "react-icons/im";

// for now
import IconCard from "../components/design/Cards/IconCard";
import { colors } from "./colors.constants";

//volunteer not sure activities
export const testData = [
  {
    title: "Story Telling",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut expedita vero, odio quam eum dolore. Quidem temporibus et, magnam voluptates suscipit ullam dicta delectus tempora quas voluptatum in earum corrupti natus similique possimus odio placeat doloribus excepturi odit, libero aliquam eos ducimus itaque accusamus. Tenetur?",
    mode: "online",
    //check mode in the loop when iterating through the data
    icons: [
      <IconCard
        icon={<BsCalendarDateFill size={25} color={colors.PRIMARY_GREEN} />}
        title="Date"
        detail={"23/06/2022"}
      />,
      <IconCard
        icon={<IoTime size={30} color={colors.PRIMARY_GREEN} />}
        title="Time"
        detail={"11 am"}
      />,
      <IconCard
        icon={<GiSandsOfTime size={25} color={colors.PRIMARY_GREEN} />}
        title="Duration"
        detail={"1 hour"}
      />,
      <IconCard
        icon={<BiWifi size={25} color={colors.PRIMARY_GREEN} />}
        title="Mode"
        detail={"Online"}
      />,
    ],
  },
  {
    title: "Meeting the kids",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut expedita vero, odio quam eum dolore. Quidem temporibus et, magnam voluptates suscipit ullam dicta delectus tempora quas voluptatum in earum",
    mode: "offline",
    icons: [
      <IconCard
        icon={<BsCalendarDateFill size={25} color={colors.PRIMARY_GREEN} />}
        title="Date"
        detail={"02/06/2022"}
      />,
      <IconCard
        icon={<IoTime size={30} color={colors.PRIMARY_GREEN} />}
        title="Time"
        detail={"1 pm"}
      />,
      <IconCard
        icon={<GiSandsOfTime size={25} color={colors.PRIMARY_GREEN} />}
        title="Duration"
        detail={"2 hours"}
      />,
      <IconCard
        icon={<BiWifiOff size={25} color={colors.PRIMARY_GREEN} />}
        title="Mode"
        detail={"Offline"}
      />,
    ],
    otherCards: [
      <IconCard
        icon={<ImLocation size={25} color={colors.PRIMARY_GREEN} />}
        title="Location"
        detail={
          "Gokuldham Complex, Powder Gali, Goregaon East, Mumbai,Maharashtra - 400063"
        }
        customStyles={{
          padding: "10px 10px",
          marginRight: "0",
          maxWidth: "25rem",
        }}
      />,
    ],
  },
  {
    title: "Office Work",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut expedita vero, odio quam eum dolore. Quidem temporibus et, magnam voluptates suscipit ullam dicta delectus tempora quas voluptatum in earum",
    mode: "offline",
    icons: [
      <IconCard
        icon={<BsCalendarDateFill size={25} color={colors.PRIMARY_GREEN} />}
        title="Date"
        detail={"15/06/2022"}
      />,
      <IconCard
        icon={<IoTime size={30} color={colors.PRIMARY_GREEN} />}
        title="Time"
        detail={"12 pm"}
      />,
      <IconCard
        icon={<GiSandsOfTime size={25} color={colors.PRIMARY_GREEN} />}
        title="Duration"
        detail={"4 hours"}
      />,
      <IconCard
        icon={<BiWifiOff size={25} color={colors.PRIMARY_GREEN} />}
        title="Mode"
        detail={"Offline"}
      />,
    ],
    otherCards: [
      <IconCard
        icon={<ImLocation size={25} color={colors.PRIMARY_GREEN} />}
        title="Location"
        detail={
          "Gokuldham Complex, Powder Gali, Goregaon East, Mumbai,Maharashtra - 400063"
        }
        customStyles={{
          padding: "10px 10px",
          marginRight: "0",
          maxWidth: "25rem",
        }}
      />,
    ],
  },
];
