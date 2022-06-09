import React from "react";
import { useSelector } from "react-redux";

// components
import VolunteerDashboard from "./Volunteer";

// css
import styles from "./Dashboards.module.css";

// constants
import { accountTypes } from "../../constants/accounts.constants";

const Dashboard = () => {
    // do a check here
    const currUser = useSelector((state) => state.user);
    return (
        <main className={styles.container}>
            <VolunteerDashboard />
        </main>
    );
}
 
export default Dashboard;