import React from 'react';

// css
import styles from './VerticalStepper.module.css';

// components
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from "../Button";

// constants
import {colors} from "../../../constants/colors.constants";

/**
 * 
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns {React.Component} Vertical component for stepper
 */

const VerticalStepper = ({data, activeStep, continueStepper, backStepper, submitResp=()=>{} ,orientation="vertical"}) => {
    return (
        <Stepper
            activeStep={activeStep}
            orientation={orientation}
        >
            {data.map((label, index) => (
                <Step key={index}>
                    <StepLabel
                        StepIconProps={{
                            classes: {
                                root: styles.stepIcon,
                                active: styles.stepIconActive,
                                completed: styles.stepIconCompleted,
                            }
                        }}
                    >
                        <span className={styles.label}>{label.label}</span>
                    </StepLabel>
                    <StepContent>
                        <p className={styles.content}>{label.description}</p>
                        {label.button ? <div className={styles.btnGrp}>
                        <Button
                            value={activeStep===data.length-1 ? "Submit" : "Continue"}
                            onClick={activeStep===data.length-1 ? submitResp : continueStepper}
                            customStyles={{
                                backgroundColor: colors.PRIMARY_ORANGE,
                                borderRadius: "10px",
                                border: "0",
                                fontSize: "0.8rem",
                                paddingY: "0.7rem",
                                paddingX: "0.2rem",
                            }}
                        />
                        {activeStep===0 ? null : <Button
                            value="Back"
                            btnType="secondary"
                            onClick={backStepper}
                            disabled={activeStep === 0 ? true : false}
                            customStyles={{
                                color: colors.PRIMARY_BLACK,
                                borderRadius: "10px",
                                fontSize: "0.8rem",
                                paddingY: "0.7rem",
                                paddingX: "0.2rem",
                            }}
                        />}
                    </div>:null}
                    </StepContent>
                </Step>
            ))}
        </Stepper>
    );
}
 
export default VerticalStepper;