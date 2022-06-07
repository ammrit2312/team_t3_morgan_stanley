import React, { useState } from 'react';

// css
import styles from "./VolunteerFormPage.module.css";

//assets
import Wave from "../../assets/Top_wave.svg";

// components
import VerticalStepper from '../../components/design/VerticalStepper';
import FormCard from './FormCard';

// later
const steps = [
    {
      label: 'Fill personal details',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque omnis temporibus eius eveniet deserunt laboriosam labore explicabo, architecto sequi et, quae aliquam fugit optio quam deleniti vitae commodi a suscipit beatae? Pariatur error sunt eligendi esse perspiciatis`,
      button: false
    },
    {
      label: 'Tell us more about you',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque omnis temporibus eius eveniet deserunt laboriosam labore explicabo',
        button: false
    },
    {
      label: 'Relevant skills and details',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque omnis temporibus eius eveniet deserunt laboriosam labore explicabo, architecto sequi et, quae aliquam fugit optio quam deleniti vitae commodi a suscipit beatae? Pariatur error sunt eligendi esse perspiciatis`,
        button: false
    },
];

const VolunteerFormPage = () => {

    const [activeStep, setActiveStep] = useState(0);

    const continueStepper = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const backStepper = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    return (
        <main className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    {/*https://stackoverflow.com/questions/41078478/css-animated-checkmark*/}
                    <h1 className={styles.heading}>Volunteer Form</h1>
                    <VerticalStepper 
                        data = {steps}
                        activeStep = {activeStep}
                        continueStepper = {continueStepper}
                        backStepper = {backStepper}
                    />
                </div>
                <div className={styles.rightContainer}>
                    <FormCard activeStep={activeStep} continueStepper={continueStepper} len={steps.length} backStepper={backStepper}/>
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