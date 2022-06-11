import React from "react";
import styles from "./index.module.css";

const Chip = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles.chip}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Chip;
