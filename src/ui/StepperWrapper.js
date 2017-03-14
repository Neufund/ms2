import React from 'react';
import {
    Step,
    Stepper,
    StepLabel
} from 'material-ui/Stepper';

export default ({step}) => {
    return (
        <Stepper activeStep={step} orientation="vertical">
            <Step>
                <StepLabel>Sign your Limited Partner Agreement</StepLabel>
            </Step>
            <Step>
                <StepLabel>Identification</StepLabel>
            </Step>
            <Step>
                <StepLabel>Bank transfer</StepLabel>
            </Step>
        </Stepper>
    )
};
