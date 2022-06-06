import React, { useState } from 'react';

// css
import styles from "./VolunteerFormPage.module.css";

// components
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

//assets
import Wave from "../../assets/Top_wave.svg";


// later
const steps = [
    {
      label: 'Select campaign settings',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'Create an ad group',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];

const VolunteerFormPage = () => {

    const [activeStep, setActiveStep] = useState(0);

    return (
        <main className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    {/*https://stackoverflow.com/questions/41078478/css-animated-checkmark*/}
                    <Stepper activeStep={activeStep} orientation="vertical">
                        
                    </Stepper>
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