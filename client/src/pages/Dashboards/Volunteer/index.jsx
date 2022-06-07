import React from "react";

// css
import styles from "../Dashboards.module.css";

// components
import VolunteerDashboardCard from "../../../components/design/Cards/VolunteerDashboardCard";

const VolunteerDashboard = () => {
    return (
        <div>
            <h1>Volunteer Dashboard</h1>
            <VolunteerDashboardCard />
            <VolunteerDashboardCard />
            <VolunteerDashboardCard />
        </div>
    );
}
 
export default VolunteerDashboard;