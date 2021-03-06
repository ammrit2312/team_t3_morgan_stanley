import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../ApprovedActivities.module.css";
import { useNavigate } from "react-router-dom";

// components
import VolunteerDashboardCard from "../../../components/design/Cards/VolunteerDashboardCard";

// api
import { getAllUpcomingActivities } from "../../../api/adminDashboard.api";

function AdminApprovedActivities() {
  const [apiData, setAPIData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getAllUpcomingActivities().then((data) => {
      if (data.status === 200) {
        console.log(data);
        setAPIData(data.data);
      }
    });
  }, []);

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
                    {...data}
                    onClick={() => navigate("/activity/" + data._id)}
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

export default AdminApprovedActivities;
