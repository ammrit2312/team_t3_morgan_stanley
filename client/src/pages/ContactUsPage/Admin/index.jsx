import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

// components
import ContactUsCard from "../../../components/design/ContactUsCard";

// api
import { getContactUs } from "../../../api/contact.api";

const NotificationsPage = () => {
  const [apiData, setAPIData] = useState(null);
  useEffect(() => {
    getContactUs().then((res) => {
      if (res.status === 200) {
        setAPIData(res.data);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Contact Requests</h1>
      {apiData === null ? (
        <div>Loading...</div>
      ) : (
        apiData.map((data, index) => <ContactUsCard key={index} {...data} />)
      )}
    </div>
  );
};

export default NotificationsPage;
