import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// css
import styles from "./ListVolunteers.module.css";

// constants
import { tableHeaders } from "../../constants/tableStructure.constants";
import { colors } from "../../constants/colors.constants";
import { entireRoutes } from "../../constants/routes";

// components
import Table from "../../components/design/Table";

// icons
import { BsFillChatFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

// api
import { getAllBasicDetailsOfUsers } from "../../api/adminDashboard.api";
import {deleteVolunteer} from "../../api/accounts.api"

const ListVolunteers = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    getAllBasicDetailsOfUsers().then((res) => {
      setApiData(res.data);
    });
  }, [apiData]);

  let navigate = useNavigate();

  const buttons = [
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
    {
      onClick: (e, row) => {
        e.stopPropagation();
        console.log("Delete Volunteer", row);
        deleteVolunteer(row.UserID).then(res=>{
          console.log(res);
          setApiData(apiData.filter(volunteer=>volunteer.UserID!==row.UserID))
          // Firebase delete USER
        })
      },
      icon: <MdDelete size={22} />,
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

  const handleRowClick = (data, e) => {
    console.log("TABLE DATA",data); // redirect to other page
    navigate(`${entireRoutes.VOLUNTEER}/${data.UserID}`);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>All the Volunteer Data</h1>
      {apiData === null ? (
        <div>Loading...</div>
      ) : (
        <Table
          tableName="Volunteer Data"
          data={apiData}
          tableHeaders={tableHeaders}
          allowFilters={true}
          allowDownload={true}
          filename="volunteer-data"
          onRowClick={handleRowClick}
          showSerialNo={true}
          itemsPerPage={10}
          borderSpacing="3px 5px"
          nullDataPlaceholder="NA"
          buttons={buttons}
        />
      )}
    </main>
  );
};

export default ListVolunteers;
