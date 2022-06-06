import React from 'react';

// css
import styles from "./VolunteerFormPage.module.css";

//assets
import Wave from "../../assets/Top_wave.svg";

const VolunteerFormPage = () => {
    return (
        <main className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    hi
                    {/*https://stackoverflow.com/questions/41078478/css-animated-checkmark*/}
                </div>
                <div className={styles.rightContainer}>
                    double hi
                </div>
            </div>
            <img 
                src={Wave}
                className={styles.wave}
            />
        </main>
    );
}

export default VolunteerFormPage