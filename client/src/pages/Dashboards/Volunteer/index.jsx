import React from "react";

// css
import styles from "../Dashboards.module.css";

// components
import VolunteerDashboardCard from "../../../components/design/Cards/VolunteerDashboardCard";

// test
const testData = [
    {
        title: "Story Telling",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut expedita vero, odio quam eum dolore. Quidem temporibus et, magnam voluptates suscipit ullam dicta delectus tempora quas voluptatum in earum corrupti natus similique possimus odio placeat doloribus excepturi odit, libero aliquam eos ducimus itaque accusamus. Tenetur?",
        date: "23/06/2022",
        time: "11 am",
        mode: "online",
        duration: "1 hour",
    },
    {
        title: "Meeting the kids",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut expedita vero, odio quam eum dolore. Quidem temporibus et, magnam voluptates suscipit ullam dicta delectus tempora quas voluptatum in earum",
        date: "02/06/2022",
        time: "1 pm",
        mode: "offline",
        duration: "2 hours",
        location: "Gokuldham Complex, Powder Gali, Goregaon East, Mumbai,Maharashtra - 400063",
    },
    {
        title: "Office Work",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut expedita vero, odio quam eum dolore. Quidem temporibus et, magnam voluptates suscipit ullam dicta delectus tempora quas voluptatum in earum",
        date: "15/06/2022",
        time: "12 pm",
        mode: "offline",
        duration: "4 hours",
        location: "Gokuldham Complex, Powder Gali, Goregaon East, Mumbai,Maharashtra - 400063",
    },
]

const VolunteerDashboard = () => {

    // send onAccept and onReject to VolunteerDashboardCard
    
    return (
        <div>
            <h1>Volunteer Dashboard</h1>
            {testData.map((data, index) => (
                <VolunteerDashboardCard key={index} {...data} />
            ))}
        </div>
    );
}
 
export default VolunteerDashboard;