import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

// css
import styles from "../Dashboards.module.css";

// components
import VolunteerDashboardCard from "../../../components/design/Cards/VolunteerDashboardCard";
import showNotification from "../../../utils/notifications.utils";


// api


const AdminDashboard = () => {
  const [apiData, setAPIData] = useState(null);

  useEffect(() => {
    
  }, []);

  // send onAccept and onReject to VolunteerDashboardCard
  return (
    <div className={styles.container}>
      <h1>Mapping for Activities</h1>
      {apiData !== null ? (
        apiData.message ? (
          <div>
            <p>
            {apiData.message}
            </p>
            <p>
              Visit <Link to="/volunteer/upcoming-activities/">Upcoming Activities</Link> for further details
            </p>
          </div>
        ) : (
          <div>
            {apiData.length === 1 && apiData[0] === null ? (
              <div>No activities mapped. Kindly visit after some time!</div>
            ) : (
              <div>
                <p>Please confirm your decision as soon as possible</p>
                {apiData.map(
                  (data, index) =>
                    data && (
                      <VolunteerDashboardCard
                        key={index}
                        // buttons={buttons}
                        {...data}
                      />
                    )
                )}
              </div>
            )}
          </div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default AdminDashboard;