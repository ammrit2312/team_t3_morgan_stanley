import React from "react";

// components
import Table from "../../../components/design/Table"

const data = [
    {
      name: "John",
      age: "25",
      dob: "2022-03-22",
      team: "Team 1",
      projects: [null, "Project 2"],
    },
    {
      name: "Jane",
      age: null,
      dob: undefined,
      team: "Team 2",
      projects: ["Project 1", "Project 2", "Project 3"],
    },
    {
      name: "Jane",
      age: "28",
      dob: "2022-04-22",
      team: "Team 4",
      projects: ["Project 4"],
    },
    {
      name: "Jane",
      age: "28",
      dob: "2022-04-22",
      team: "Team 4",
      projects: ["Project 4"],
    },
    {
      name: "Albus Percival Wulfric Brian Dumbledore",
      age: "88",
      dob: "2021-03-22",
      team: "Team 1",
      projects: ["Project 1", "Project 3"],
    },
    {
      name: "Ronald",
      age: "29",
      dob: "2022-04-22",
      team: "Team 2",
      projects: ["Project 4"],
    },
    {
      name: "Jane",
      age: "28",
      dob: "2022-04-22",
      team: "Team 4",
      projects: ["Project 4"],
    },
    {
      name: "Tanjiro Kamado",
      age: "28",
      dob: "2022-04-22",
      team: "Team 4",
      projects: ["Project 2"],
    },
    {
      name: "Harry",
      age: "28",
      dob: "2022-04-22",
      team: "Team 4",
      projects: ["Project 4"],
    },
    {
      name: "Jane",
      age: "28",
      dob: "2022-04-22",
      team: "Team 4",
      projects: ["Project 4"],
    },
  ];

  const tableHeaders = {
    name: {
      key: "name",
      title: "Associate Name",
      type: "text",
    },
    age: {
      key: "age",
      title: "Associate Age",
      type: "number",
    },
    dob: {
      key: "dob",
      title: "Date of Birth",
      type: "date",
    },
    team: {
      key: "team",
      title: "Team Name",
      type: "text",
      options: [
        {
          label: "Team 1",
          value: "Team 1",
        },
        {
          label: "Team 2",
          value: "Team 2",
        },
        {
          label: "Team 3",
          value: "Team 3",
        },
        {
          label: "Team 4",
          value: "Team 4",
        },
      ],
    },

    projects: {
      key: "projects",
      title: "Current Projects",
      type: "text",
      options: [
        {
          label: "Project 1",
          value: "Project 1",
        },
        {
          label: "Project 2",
          value: "Project 2",
        },
        {
          label: "Project 3",
          value: "Project 3",
        },
        {
          label: "Project 4",
          value: "Project 4",
        },
      ],
    },
  };

  const handleRowClick = (data) => {
    console.log(data); // this prints the row object being clicked
  };

const AdminDashboard = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Table
                tableName="Associates Data"
                data={data}
                tableHeaders={tableHeaders}
                allowFilters={true}
                allowDownload={true}
                filename="demon slayers"
                onRowClick={handleRowClick}
                showSerialNo={true}
                itemsPerPage={5}
                borderSpacing="3px 5px"
                nullDataPlaceholder="NA"
            />
        </div>
    );
}
 
export default AdminDashboard;