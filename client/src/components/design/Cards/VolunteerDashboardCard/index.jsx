import React from "react";

// components
import Button from "../../Button";

// assets
import { BsBookmarkCheckFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

// constants
import {colors} from "../../../../constants/colors.constants";

// css
import styles from "../Cards.module.css";

// icons
import { IoTime } from "react-icons/io";
import { GiSandsOfTime } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiWifiOff } from "react-icons/bi";
import { BiWifi } from "react-icons/bi";
import IconCard from "../IconCard";



const VolunteerDashboardCard = () => {
    const mode = "offline";
    return (
        <div className={styles.container}>
            <section className={styles.leftContainer}>
                <div>
                    <h3 className={styles.title}>Activity Title</h3>
                    <p className={styles.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam explicabo voluptatum soluta quis adipisci est recusandae alias quos perferendis laborum expedita facilis, deserunt aperiam praesentium debitis. A molestias mollitia voluptatum aut tempore voluptas dolor. Corrupti tempora quibusdam ullam quasi voluptas!</p>
                </div>
                <div>
                    <span>Time: 11am</span>
                    {/* <IconCard Icon={<IoTime />} title="Time" detail="11am" /> */}
                    <span>Date: 23/07/2000</span>
                    <span>Duration of Event: 2 hours</span>
                    <span>Mode: {mode}</span>
                </div>
                <div>
                    <span>Location: Gokuldham Complex, Powder Gali, Goregaon East, Mumbai, Maharashtra - 400063</span>
                </div>
            </section>
            <section className={styles.rightContainer}>
                <div>
                    <Button
                        value={`Accept`}
                        onClick={() => {console.log("Maine Dabaya")}}
                        customStyles={{
                            backgroundColor: colors.PRIMARY_GREEN,
                            borderRadius: "10px",
                            border: "0",
                            fontWeight: "bold",
                            fontSize: "0.9rem",
                            paddingY: "0.7rem",
                            paddingX: "0.2rem",
                        }}
                        icon={<BsBookmarkCheckFill size={20}/>}
                    />
                    <Button
                        value={"Reject"}
                        onClick={() => {console.log("Maine Dabaya")}}
                        customStyles={{
                            marginTop: "2rem",
                            backgroundColor: colors.PRIMARY_RED,
                            borderRadius: "10px",
                            border: "0",
                            fontSize: "0.9rem",
                            paddingY: "0.7rem",
                            paddingX: "0.2rem",
                        }}
                        icon={<ImCross size={18}/>}
                    />
                </div>
            </section>
        </div>
    );
}
 
export default VolunteerDashboardCard;