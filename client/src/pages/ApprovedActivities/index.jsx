import React from 'react';

import styles from "./ApprovedActivities.module.css";

// components
import VolunteerApprovedActivities from './Volunteer';
import AdminApprovedActivities from './Admin';

const ApprovedActivites = () => {
    return (
        <main className={styles.container}>
            <VolunteerApprovedActivities />
        </main>
    );
}
 
export default ApprovedActivites;