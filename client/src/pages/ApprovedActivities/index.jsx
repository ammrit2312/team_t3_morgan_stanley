import React from 'react';
import { useSelector } from "react-redux";

// css
import styles from "./ApprovedActivities.module.css";

// constants
import { accountTypes } from "../../constants/accounts.constants";

// components
import VolunteerApprovedActivities from './Volunteer';
import AdminApprovedActivities from './Admin';

const ApprovedActivites = () => {
    const currUser = useSelector((state) => state.user);
    return (
        <main className={styles.container}>
            <VolunteerApprovedActivities />
        </main>
    );
}
 
export default ApprovedActivites;