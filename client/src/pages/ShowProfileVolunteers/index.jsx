import React from "react";
import { useParams } from "react-router-dom";

// css
import styles from "./ShowProfileVolunteers.module.css";

// constants
import { colors } from "../../constants/colors.constants";

// components
import IconCard from "../../components/design/Cards/IconCard";

// icons
import { FaUserAlt, FaBuilding, FaWifi } from "react-icons/fa";
import { MdEmail, MdOutlineWork, MdHearing } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { IoSchool, IoLanguage } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";

import { FcGlobe, FcLike } from "react-icons/fc";
import { BsCalendarDateFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

const ShowProfileVolunteer = () => {
    let { id } = useParams();
    // get data for this id

    /* name - text
    address - text
    college - text
    email - text
    phone - number
    nationality - text
    academic qualification - text
    occupation - text
    langauge - array
    organisation - text
    how did you hear about us - array(platform)
    location - array
    availability - array
    mode - text
    relevant skills - array
    preferences - array
    */
    const data = {
        UserID: "200",
        Volunteer_Name: "John Doe",
        Volunteer_Address: "123, ABC Street, XYZ City",
        Volunteer_College: "XYZ College",
        Volunteer_Email: "johndoe@xyz.com",
        Volunteer_Organization: "XYZ Organization",
        Volunteer_Academic_Qualifications: "B.Tech",
        Volunteer_Occupation: "Student",
        Volunteer_Nationality: "Indian",
        Volunteer_Preferred_Mode: "Offline",
        Volunteer_Number: 9191919191,
        Volunteer_Number_Of_Activities_Attended: 3,
        Volunteer_Number_Of_Activities_Opted_Out: 2,
        Volunteer_Platform: ["Through a sentsitization session", "Through Media", "Through the Volunteer Calendar",],
        Volunteer_Preferred_Locations: ["Bangalore", "Chennai"],
        Volunteer_Availability: ["Weekend", "Weekday"],
        Volunteer_Interested_Activity_Type: ["Play Session with Children", "Toy collection and Distribution"],
        Volunteer_Languages: ["English", "Hindi"],
        Volunteer_Skills: ["Story Telling", "Photography", "Writing and Editing"],
        assigned: false,
        //Upcoming_Activities -> dunno what to do with this
    };

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Volunteer Details</h1>
            <div className={styles.details}>
                <h1 className={`${styles.title} ${styles.cards} ${styles.colorDetails}`}>{data["Volunteer_Name"]}</h1>
                <div className={styles.cardsContainer}>
                    {/* Basic Details */}
                    <div className={`${styles.cards} ${styles.containerCard}`}>
                        <IconCard
                            title="Name"
                            icon={<FaUserAlt size={20} color={colors.PRIMARY_GREEN}/>}
                            detail={data["Volunteer_Name"]}
                            customStyles={{
                                width: "5rem",
                            }}
                        />
                        <IconCard
                            title="Email"
                            icon={<MdEmail size={25} color={colors.PRIMARY_BLUE}/>}
                            detail={data["Volunteer_Email"]}
                        />
                        <IconCard
                            title="Number"
                            icon={<AiFillPhone size={25} color={colors.PRIMARY_GREEN}/>}
                            detail={data["Volunteer_Number"]}
                        />
                        <IconCard
                            title="College"
                            icon={<IoSchool size={25}/>}
                            detail={data["Volunteer_College"]}
                        />
                        <div style={{gridColumn: "2 / 4"}}>
                            <IconCard
                                title="Address"
                                icon={<ImLocation2 size={25} color={colors.PRIMARY_GREEN}/>}
                                detail={data["Volunteer_Address"]}
                            />
                        </div>
                    </div>

                    <div className={`${styles.cards} ${styles.containerCard}`}>
                        <IconCard
                            title="Nationality"
                            icon={<FcGlobe size={25}/>}
                            detail={data["Volunteer_Nationality"]}
                            customStyles={{
                                width: "5rem",
                            }}
                        />
                        <IconCard
                            title="Academic Qualifications"
                            icon={<IoSchool size={25}/>}
                            detail={data["Volunteer_Academic_Qualifications"]}
                            customStyles={{
                                width: "6rem",
                            }}
                        />
                        <IconCard
                            title="Occupation"
                            icon={<MdOutlineWork size={25}/>}
                            detail={data["Volunteer_Occupation"]}
                            customStyles={{
                                width: "6rem",
                            }}
                        />
                        <IconCard
                            title="Languages"
                            icon={<IoLanguage size={25}/>}
                            detail={data["Volunteer_Languages"].join(", ")}
                            customStyles={{
                                width: "5rem",
                            }}
                        />
                        <div style={{gridColumn: "2 / 4"}}>
                            <IconCard
                                title="Organization"
                                icon={<FaBuilding size={22}/>}
                                detail={data["Volunteer_Organization"]}
                            />
                        </div>
                    </div>
                    
                    <div className={`${styles.cards} ${styles.containerCard}`}>
                        <IconCard
                            title="Hear about us"
                            icon={<MdHearing size={25}/>}
                            detail={data["Volunteer_Platform"].join(", ")}
                        />
                        <IconCard
                            title="Location Preferred"
                            icon={<ImLocation2 size={25} color={colors.PRIMARY_GREEN}/>}
                            detail={data["Volunteer_Preferred_Locations"].join(", ")}
                        />
                        <IconCard
                            title="Availability"
                            icon={<BsCalendarDateFill size={25}/>}
                            detail={data["Volunteer_Availability"].join(", ")}
                        />
                        <IconCard
                            title="Mode"
                            icon={<FaWifi size={25}/>}
                            detail={data["Volunteer_Preferred_Mode"]}
                        />
                        <IconCard
                            title="Skills"
                            icon={<GiSkills size={25}/>}
                            detail={data["Volunteer_Skills"].join(", ")}
                        />
                        <IconCard
                            title="Preferences"
                            icon={<FcLike size={25}/>}
                            detail={data["Volunteer_Interested_Activity_Type"].join(", ")}
                        />
                        {/* <div style={{gridColumn: "2 / 4"}}>
                            <IconCard
                                title="Organization"
                                icon={<FaBuilding size={22}/>}
                                detail={data["Volunteer_Organization"]}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default ShowProfileVolunteer;