import React, {useState, useEffect} from "react";
import Chart from "react-apexcharts";

// apis
import {getPlatformStats, getPlacesStats, getModeStats} from "../../api/adminDashboard.api";

const Statistics = () => {
    const [platformOptions, setPlatformOptions] = useState(null);
    const [platformSeries, setPlatformSeries] = useState(null);

    useEffect(() => {
        getPlatformStats().then((res) => {
            console.log("Maal", res.data);
            const options = {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: res.data.x
                }
            };
            const series = [
                {
                    name: "Platforms",
                    data: res.data.y
                }
            ];
            setPlatformOptions(options);
            setPlatformSeries(series);
        });
    }, []);
    return (
        <main>
            <h1>Statistics</h1>
            <Chart
              options={platformOptions}
              series={platformSeries}
              type="bar"
              width="500"
            />
        </main>
    );
}
 
export default Statistics;