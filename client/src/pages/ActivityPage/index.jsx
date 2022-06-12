import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./ActivityPage.module.css";

// components
import Chip from "../../components/design/Chip";
import Table from "../../components/design/Table";

// constants
import { activityMappinDetails } from "../../constants/tableStructure.constants";
import { colors } from "../../constants/colors.constants";
import { entireRoutes } from "../../constants/routes";

// api
// import { getUserData } from "../../api/userDetails.api";

// data
import { activityToDisplayValue } from "../../constants/apiData.constants";

// icons
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { BsFillChatFill } from "react-icons/bs"; 

const ActivityPage = () => {
  const { activityId } = useParams();
  const navigate = useNavigate();
  const currUser = useSelector((state) => state.user);
  const [userData, setUserData] = useState(null);
  const [preferredVolunteers, setPreferredVolunteers] = useState([]);

  //   useEffect(() => {
  //     getUserData(currUser.uid).then((res) => {
  //       setUserData(res.data);
  //     });
  //   }, []);

  const buttons_preffered = [
    {
      onClick: (e, row) => {
        e.stopPropagation();
        console.log("Approved");
        console.log(row);
      },
      icon: <TiTick size={22} />,
      customStyles: {
        backgroundColor: colors.PRIMARY_GREEN,
        borderRadius: "10px",
        border: "0",
        fontWeight: "bold",
        fontSize: "0.9rem",
        width: "5px",
        minWidth: "0px",
        padding: "10px 25px",
        marginRight: "25px",
      },
    },
    {
      onClick: (e, row) => {
        e.stopPropagation();
        console.log("Reject Volunteer");
      },
      icon: <ImCross size={15} />,
      customStyles: {
        backgroundColor: colors.PRIMARY_RED,
        borderRadius: "10px",
        border: "0",
        fontWeight: "bold",
        fontSize: "0.9rem",
        width: "5px",
        minWidth: "0px",
        padding: "10px 25px",
      },
    },
  ];

  const buttons_assigned = [
    {
      onClick: (e, row) => {
        e.stopPropagation();
        console.log("Message should be done");
        console.log(row);
      },
      icon: <BsFillChatFill size={22} />,
      customStyles: {
        backgroundColor: colors.PRIMARY_GREEN,
        borderRadius: "10px",
        border: "0",
        fontWeight: "bold",
        fontSize: "0.9rem",
        width: "5px",
        minWidth: "0px",
        padding: "10px 25px",
        marginRight: "25px",
      },
    },
  ]

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
      Preferred_Users: [
        "71c5y0imHVRcO9gbJBJtavRIOVh2",
        "rs6PHxfzrPcJQXk4mRRfDufdMEE2",
        "rs6PHxfzrPcJQXk4mRRfDufdMEE2",
        "rs6PHxfzrPcJQXk4mRRfDufdMEE2",
        "rs6PHxfzrPcJQXk4mRRfDufdMEE2",
        "rs6PHxfzrPcJQXk4mRRfDufdMEE2",
        "rs6PHxfzrPcJQXk4mRRfDufdMEE2",
        "rs6PHxfzrPcJQXk4mRRfDufdMEE2",
        "rs6PHxfzrPcJQXk4mRRfDufdMEE2",
        "rs6PHxfzrPcJQXk4mRRfDufdMEE2",
        "rs6PHxfzrPcJQXk4mRRfDufdMEE2",
        "rs6PHxfzrPcJQXk4mRRfDufdMEE2",
        "101"
      ],
      AssignedTo: [
        "rs6PHxfzrPcJQXk4mRRfDufdMEE2",
        "rs6PHxfzrPcJQXk4mRRfDufdMEE2",
        "101"
      ],
      // AssignedTo: "Assigned To",
    };
    const data2 = [
      null,
      null,
      {
        UserID: "101",
        Volunteer_Name: "abhishek m",
        Volunteer_Username: "",
        Volunteer_Address: "#123 square",
        Volunteer_College: "PESU",
        Volunteer_Organization: "N.A.",
        Volunteer_Academic_Qualifications: "B.tech",
        Volunteer_Occupation: "Student",
        Volunteer_email: "test@test.com",
        Volunteer_Nationality: "Indian",
        Volunteer_Preferred_Mode: [],
        Volunteer_Number: 994567,
        Volunteer_Number_Of_Activities_Attended: 0,
        Volunteer_Number_Of_Activities_Opted_Out: 0,
        Volunteer_Platform: [
            "online"
        ],
        Upcoming_Activities: [
            "62a0f512127e5ed4dec6f701"
        ],
        Volunteer_Preferred_Locations: [
            "mumbai",
            "navi mumbai"
        ],
        Volunteer_Availability: [
            "weekend"
        ],
        Volunteer_Interested_Activity_Type: [],
        Volunteer_Languages: [
            "hindi",
            "tamil"
        ],
        Volunteer_Skills: [
            "story telling",
            "communication"
        ],
        Volunteer_mapped: 1,
        assigned: true,
        createdAt: "2022-06-11T15:20:17.550Z",
        updatedAt: "2022-06-12T05:55:53.039Z",
      },
      {
        UserID: "101",
        Volunteer_Name: "abhishek m",
        Volunteer_Username: "",
        Volunteer_Address: "#123 square",
        Volunteer_College: "PESU",
        Volunteer_Organization: "N.A.",
        Volunteer_Academic_Qualifications: "B.tech",
        Volunteer_Occupation: "Student",
        Volunteer_email: "test@test.com",
        Volunteer_Nationality: "Indian",
        Volunteer_Preferred_Mode: [],
        Volunteer_Number: 994567,
        Volunteer_Number_Of_Activities_Attended: 0,
        Volunteer_Number_Of_Activities_Opted_Out: 0,
        Volunteer_Platform: [
            "online"
        ],
        Upcoming_Activities: [
            "62a0f512127e5ed4dec6f701"
        ],
        Volunteer_Preferred_Locations: [
            "mumbai",
            "navi mumbai"
        ],
        Volunteer_Availability: [
            "weekend"
        ],
        Volunteer_Interested_Activity_Type: [],
        Volunteer_Languages: [
            "hindi",
            "tamil"
        ],
        Volunteer_Skills: [
            "story telling",
            "communication"
        ],
        Volunteer_mapped: 1,
        assigned: true,
        createdAt: "2022-06-11T15:20:17.550Z",
        updatedAt: "2022-06-12T05:55:53.039Z",
      }
    ];
    setPreferredVolunteers(data2);
    setUserData(data);
  }, []);

  const handleRowClick = (data, e) => {
    console.log("TABLE DATA",data); // redirect to other page
    navigate(`${entireRoutes.VOLUNTEER}/${data.UserID}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Activity Information</h1>
      <div className={styles.detailsContainer}>
        {userData !== null ? (
          <div>
            {Object.keys(userData).map((key, index) => {
              return (
                key !== "ActivityID" && key !== "Preferred_Users" && key !== "AssignedTo" && (
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
            {console.log("preferred volunteers",userData.Preferred_Users.length)}
            {userData.Preferred_Users.length > 0 && (
              <div className={styles.tableContainer}>
                <Table
                  tableName="Preferred Volunteers"
                  data={preferredVolunteers}
                  tableHeaders={activityMappinDetails}
                  allowFilters={true}
                  allowDownload={true}
                  filename={"preferred-volunteer-data"+userData.ActivityID}
                  onRowClick={handleRowClick}
                  showSerialNo={false}
                  itemsPerPage={10}
                  borderSpacing="3px 5px"
                  nullDataPlaceholder="NA"
                  buttons={buttons_preffered}
                />
              </div>
            )}
            {userData.AssignedTo.length > 0 && (
              <div className={styles.tableContainer}>
                <Table
                  tableName="Assigned Volunteers"
                  data={preferredVolunteers}
                  tableHeaders={activityMappinDetails}
                  allowFilters={true}
                  allowDownload={true}
                  filename={"assigned-volunteer-data"+userData.ActivityID}
                  onRowClick={handleRowClick}
                  showSerialNo={false}
                  itemsPerPage={10}
                  borderSpacing="3px 5px"
                  nullDataPlaceholder="NA"
                  buttons={buttons_assigned}
                />
              </div>
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
