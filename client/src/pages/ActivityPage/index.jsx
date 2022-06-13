import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./ActivityPage.module.css";

// utils
import showNotification from "../../utils/notifications.utils";

// components
import Chip from "../../components/design/Chip";
import Table from "../../components/design/Table";

// constants
import { activityMappinDetails } from "../../constants/tableStructure.constants";
import { colors } from "../../constants/colors.constants";
import { entireRoutes } from "../../constants/routes";

// api
import {
  getDetailsofSingleActivity,
  getAllMappedUsers,
  getAllFinalisedUsers,
  adminApprove,
  adminReject,
} from "../../api/activityPage.api";

// data
import { activityToDisplayValue } from "../../constants/apiData.constants";

// icons
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { BsFillChatFill } from "react-icons/bs";

const ActivityPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const currUser = useSelector((state) => state.user);
  const [activity, setActivity] = useState(null);
  const [preferredVolunteers, setPreferredVolunteers] = useState(null);
  const [finalisedVolunteers, setFinalisedVolunteers] = useState(null);

  const buttons_preffered = [
    {
      onClick: (e, row) => {
        e.stopPropagation();
        console.log("Approved");
        console.log(row);
        adminApprove(id, row.UserID).then((res) => {
          showNotification({ type: "success", message: "Volunteer Approved" });
        });
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
        adminReject(id, row.UserID).then((res) => {
          showNotification({ type: "success", message: "Volunteer Rejected" });
        });
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

  const buttons_attendance = [
    {
      onClick: (e, row) => {
        e.stopPropagation();
        console.log("attendanceApproved");
        console.log(row);
        // adminApprove(id, row.UserID).then((res) => {
        //   showNotification({ type: "success", message: "Volunteer Approved" });
        // });
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
        console.log("absent Volunteer");
        // adminReject(id, row.UserID).then((res) => {
        //   showNotification({ type: "success", message: "Volunteer Rejected" });
        // });
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

  // const buttons_assigned = [
  //   {
  //     onClick: (e, row) => {
  //       e.stopPropagation();
  //       console.log("Message should be done");
  //       console.log(row);
  //     },
  //     icon: <BsFillChatFill size={22} />,
  //     customStyles: {
  //       backgroundColor: colors.PRIMARY_GREEN,
  //       borderRadius: "10px",
  //       border: "0",
  //       fontWeight: "bold",
  //       fontSize: "0.9rem",
  //       width: "5px",
  //       minWidth: "0px",
  //       padding: "10px 25px",
  //       marginRight: "25px",
  //     },
  //   },
  // ];

  useEffect(() => {
    console.log(id);
    getDetailsofSingleActivity(id).then((res) => {
      setActivity(res.data);
    });

    getAllMappedUsers(id).then((res) => {
      setPreferredVolunteers(res.data);
    });

    getAllFinalisedUsers(id).then((res) => {
      setFinalisedVolunteers(res.data);
    });
  }, []);

  const handleRowClick = (data, e) => {
    console.log("TABLE DATA", data); // redirect to other page
    navigate(`${entireRoutes.VOLUNTEER}/${data.UserID}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Activity Information</h1>
      <div className={styles.detailsContainer}>
        {activity !== null &&
        preferredVolunteers != null &&
        finalisedVolunteers !== null ? (
          <div>
            {Object.keys(activity).map((key, index) => {
              return (
                key !== "_id" &&
                activityToDisplayValue[key] && (
                  <div key={index} className={styles.detail}>
                    <span className={styles.key}>
                      {activityToDisplayValue[key] && activityToDisplayValue[key]}
                    </span>{" "}
                    :
                    <span className={styles.value}>
                      {Array.isArray(activity[key]) ? (
                        <Chip data={activity[key]} />
                      ) : (
                        activity[key]
                      )}
                    </span>
                  </div>
                )
              );
            })}
            {activity.Preferred_Users.length > 0 && !activity.isArchived &&
              (preferredVolunteers.message ? (
                <div>
                  <span className={styles.key}>Preferred Volunteers</span>:
                  <span className={styles.value}>No volunteer mapped !</span>
                </div>
              ) : (
                <div className={styles.tableContainer}>
                  <Table
                    tableName="Preferred Volunteers"
                    data={preferredVolunteers}
                    tableHeaders={activityMappinDetails}
                    allowFilters={true}
                    allowDownload={true}
                    filename={"preferred-volunteer-data" + activity.ActivityID}
                    onRowClick={handleRowClick}
                    showSerialNo={false}
                    itemsPerPage={10}
                    borderSpacing="3px 5px"
                    nullDataPlaceholder="NA"
                    buttons={buttons_preffered}
                  />
                </div>
              ))}
            {activity.AssignedTo.length > 0 && !activity.isArchived &&
              (finalisedVolunteers.message ? (
                <div>
                  <span className={styles.key}>Assigned Volunteers</span>:
                  <span className={styles.value}>No volunteer assigned !</span>
                </div>
              ) : (
                <div className={styles.tableContainer}>
                  <Table
                    tableName="Assigned Volunteers"
                    data={finalisedVolunteers}
                    tableHeaders={activityMappinDetails}
                    allowFilters={true}
                    allowDownload={true}
                    filename={"assigned-volunteer-data" + activity.ActivityID}
                    onRowClick={handleRowClick}
                    showSerialNo={false}
                    itemsPerPage={10}
                    borderSpacing="3px 5px"
                    nullDataPlaceholder="NA"
                    // buttons={buttons_assigned}
                  />
                </div>
              ))}
            {activity.isArchived && 
            (finalisedVolunteers.message ? (
              <div>
                <span className={styles.key}>Assigned Volunteers</span>:
                <span className={styles.value}>No volunteers were assigned !</span>
              </div>
            ) : (
              <div className={styles.tableContainer}>
                <Table
                  tableName="Assigned Volunteers"
                  data={finalisedVolunteers}
                  tableHeaders={activityMappinDetails}
                  allowFilters={true}
                  allowDownload={true}
                  filename={"assigned-volunteer-data" + activity.ActivityID}
                  onRowClick={handleRowClick}
                  showSerialNo={false}
                  itemsPerPage={10}
                  borderSpacing="3px 5px"
                  nullDataPlaceholder="NA"
                  buttons={buttons_attendance}
                />
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ActivityPage;
