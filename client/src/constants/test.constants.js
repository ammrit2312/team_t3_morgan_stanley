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


export const tableData = [
  {
    name: "John",
    email: "25",
    dob: "2022-03-22",
    availability: "Weekends",
    languages: [null, "English"],
    mode: "Online",
  },
  {
    name: "Jane",
    email: null,
    dob: undefined,
    availability: "Weekdays",
    languages: ["Hindi", "English", "Urdu"],
    mode: "Offline"
  },
  {
    name: "Jane",
    email: "28",
    dob: "2022-04-22",
    availability: "Both",
    languages: ["Marathi"],
    mode: "Online"
  },
  {
    name: "Jane",
    email: "28",
    dob: "2022-04-22",
    availability: "Both",
    languages: ["Marathi"],
    mode: "Online"
  },
  {
    name: "Albus Percival Wulfric Brian Dumbledore",
    email: "88",
    dob: "2021-03-22",
    availability: "Both",
    languages: ["Hindi", "Urdu"],
    mode: "Online"
  },
  {
    name: "Albus Percival Wulfric Brian Dumbledore",
    email: "88",
    dob: "2021-03-22",
    availability: "Both",
    languages: ["Hindi", "Urdu"],
    mode: "Offline"
  },
  {
    name: "Harry",
    email: "28",
    dob: "2022-04-22",
    availability: "Weekdays",
    languages: ["Marathi"],
    mode: "Online"
  },
  {
    name: "Jane",
    email: "28",
    dob: "2022-04-22",
    availability: "Weekdays",
    languages: ["Marathi"],
    mode: "Online"
  },
];

// require later
// const buttons = [
//   {
//     onClick: (e) => {e.stopPropagation(); console.log("Button was pressed")},
//     icon: <TiTick size={22} />,
//     customStyles: {
//       backgroundColor: colors.PRIMARY_GREEN,
//       borderRadius: "10px",
//       border: "0",
//       fontWeight: "bold",
//       fontSize: "0.9rem",
//       marginRight: "1rem",
//       width: "5px",
//       minWidth: "0px",
//       padding: "10px 25px",
//     },
//   },
//   {
//   //   value: "Cancel",
//     onClick: (e) => {e.stopPropagation(); console.log("Button was pressed")},
//     icon: <ImCross size={15} />,
//     customStyles: {
//       backgroundColor: colors.PRIMARY_RED,
//       borderRadius: "10px",
//       border: "0",
//       fontSize: "0.5rem",
//       width: "5px",
//       minWidth: "0px",
//       padding: "13px 25px",
//     },
//   },
// ];