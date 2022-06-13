import React, { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";

// css
import styles from "../Dashboards.module.css";

// components
import VolunteerDashboardCard from "../../../components/design/Cards/VolunteerDashboardCard";

// api
import {getAllActivities} from '../../../api/adminDashboard.api'

const AdminDashboard = () => {
  const [apiData, setAPIData] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    getAllActivities().then((data) => {
      console.log("mera data", data);
      setAPIData(data.data);
    });
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
              Visit <Link to="/admin/upcoming-activities/">Upcoming Activities</Link> for further details
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
                        {...data}
                        onClick={() => navigate('/activity/' + data._id)}
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