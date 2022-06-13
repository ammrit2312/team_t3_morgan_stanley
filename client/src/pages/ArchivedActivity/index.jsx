import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import VolunteerDashboardCard from "../../components/design/Cards/VolunteerDashboardCard";

// api
import { getAllArchivedActivities } from "../../api/adminDashboard.api";

function ArchivedActivities() {
  const [apiData, setAPIData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getAllArchivedActivities().then((data) => {
      if (data.status === 200) {
        console.log(data);
        setAPIData(data.data);
      }
    });
  }, []);

  return (
    <div>
      <h1>Archived Activities</h1>
      {apiData !== null ? (
        apiData.message ? (
          <p style={{ textTransform: "capitalize" }}>{apiData.message}</p>
        ) : (
          <div>
            {apiData.length === 1 && apiData[0] === null ? (
              <div>No activities Archived. Kindly visit after some time!</div>
            ) : (
              <div>
                <p>These are archived activities</p>
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

export default ArchivedActivities;
