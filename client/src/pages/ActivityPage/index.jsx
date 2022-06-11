import React from "react";
import { useParams } from "react-router-dom";

// css
import styles from "./ActivityPage.module.css";

const ActivityPage = () => {

    const { activityId } = useParams();

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Activity Page</h1>
            <div>{activityId}</div>
        </main>
    );
}
 
export default ActivityPage;