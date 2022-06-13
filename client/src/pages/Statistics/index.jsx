import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

// css
import styles from "./statistics.module.css";

// apis
import {
  getPlatformStats,
  getPlacesStats,
  getModeStats,
} from "../../api/adminDashboard.api";

// constants
import { colors } from "../../constants/colors.constants";

const Statistics = () => {
  const [platformOptions, setPlatformOptions] = useState(null);
  const [platformSeries, setPlatformSeries] = useState(null);
  const [modeOptions, setModeOptions] = useState(null);
  const [modeSeries, setModeSeries] = useState(null);
  const [placesOptions, setPlacesOptions] = useState(null);
  const [placesSeries, setPlacesSeries] = useState(null);

  useEffect(() => {
    getPlatformStats().then((res) => {
      console.log("Maal", res.data);
      const options = {
        chart: {
          id: "simple-bar",
          animations: {
            enabled: true,
            speed: 100,
          },
        },
        xaxis: {
          categories: res.data.x,
        },
        fill: { colors: [colors.PRIMARY_ORANGE] },
      };
      const series = [
        {
          name: "Number of Volunteers",
          data: res.data.y,
        },
      ];
      setPlatformOptions(options);
      setPlatformSeries(series);
    });
    getModeStats().then((res) => {
      console.log("Maalx2", res.data);
      const options = {
        labels: res.data.x,
      };
      const series = res.data.y;
      setModeOptions(options);
      setModeSeries(series);
    });
    getPlacesStats().then((res) => {
      console.log("Maalx3", res.data);
      const options = {
        labels: res.data.x,
      };
      const series = res.data.y;
      setPlacesOptions(options);
      setPlacesSeries(series);
    });
  }, []);
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Statistics</h1>
      <div className={styles.chartsDiv}>
        {platformOptions && (
            <div className={styles.chartContainer}>
                <h2>Where did Volunteers hear about Toybank:</h2>
                <Chart
                options={platformOptions}
                series={platformSeries}
                type="bar"
                width="500"
                />
            </div>
        )}
        {placesOptions && (
            <div className={styles.chartContainer}>
                <h2>Different Locations filled by Volunteers:</h2>
                <Chart
                options={placesOptions}
                series={placesSeries}
                type="pie"
                width="500"
                fill={["#F44336", "#E91E63", "#9C27B0"]}
                />
            </div>
        )}
        {modeOptions && (
            <div className={styles.chartContainer}>
                <h2>Which mode is preferred by Volunteers:</h2>
                <Chart
                options={modeOptions}
                series={modeSeries}
                type="pie"
                width="500"
                />
            </div>
        )}
      </div>
    </main>
  );
};

export default Statistics;
