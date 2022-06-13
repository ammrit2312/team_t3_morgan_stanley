import React, { useState, useEffect } from "react";
import styles from "./index.module.css"

// components
import NotificationCard from "../../components/design/NotificationCard";

// api
import { getNotification } from "../../api/notification.api";

const NotificationsPage = () => {
  const [apiData, setAPIData] = useState(null);
  useEffect(() => {
    getNotification().then((res) => {
      setAPIData(res.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Notifications</h1>
      {apiData === null ? (
        <div>Loading...</div>
      ) : (
        apiData.map((data, index) => <NotificationCard key={index} {...data} />)
      )}
    </div>
  );
};

export default NotificationsPage;
