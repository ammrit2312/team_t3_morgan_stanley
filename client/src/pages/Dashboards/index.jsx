import React from "react";

// components
import VolunteerDashboard from "./Volunteer";

// css
import styles from "./Dashboards.module.css";

const Dashboard = () => {
    // do a check here
    return (
        <main className={styles.container}>
            <VolunteerDashboard />
        </main>
    );
}
 
export default Dashboard;