import React from "react";
import { useNavigate } from 'react-router-dom';

// css
import styles from "./ListVolunteers.module.css";

// constants
import { tableData } from "../../constants/test.constants";
import { tableHeaders } from "../../constants/tableStructure.constants";
import { colors } from "../../constants/colors.constants";
import { entireRoutes } from "../../constants/routes";

// components
import Table from "../../components/design/Table";

// icons
import { BsFillChatFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const ListVolunteers = () => {
  let navigate = useNavigate();

  const buttons = [
    {
      onClick: (e, row) => {
        e.stopPropagation();
        console.log("Message should be done");console.log(row);
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
    console.log(data); // redirect to other page
    navigate(entireRoutes.VOLUNTEER + "/200");
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>All the Volunteer Data</h1>
      <Table
        tableName="Volunteer Data"
        data={tableData}
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
    </main>
  );
};

export default ListVolunteers;
