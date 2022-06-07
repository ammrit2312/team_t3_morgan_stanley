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
      label: 'Select campaign settings',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque omnis temporibus eius eveniet deserunt laboriosam labore explicabo, architecto sequi et, quae aliquam fugit optio quam deleniti vitae commodi a suscipit beatae? Pariatur error sunt eligendi esse perspiciatis`,
      button: false
    },
    {
      label: 'Create an ad group',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque omnis temporibus eius eveniet deserunt laboriosam labore explicabo',
        button: false
    },
    {
      label: 'Create an ad',
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