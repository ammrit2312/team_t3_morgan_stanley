import React from "react";
import { useSelector } from "react-redux";

// components
import VolunteerDashboard from "./Volunteer";
import AdminDashboard from "./Admin";

// css
import styles from "./Dashboards.module.css";

// constants
import { accountTypes } from "../../constants/accounts.constants";

const Dashboard = () => {
    // do a check here
    const currUser = useSelector((state) => state.user);
    return (
        <main className={styles.container}>
            {/* {currUser.accountType === accountTypes.ADMIN && <AdminDashboard/>}
            {currUser.accountType === accountTypes.VOLUNTEER && <VolunteerDashboard />} */}
            <AdminDashboard/>
        </main>
    );
}
 
export default Dashboard;