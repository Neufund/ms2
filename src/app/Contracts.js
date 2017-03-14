import React from 'react';
import ProgressBar from '../ui/ProgressBar';
import Headline from '../ui/Headline';
import ContractSign from '../ui/ContractSign';
import './Contracts.css';
import {
    Step,
    Stepper,
    StepLabel
} from 'material-ui/Stepper';

export default () => {
    return (
        <div className="Contracts">

            <Headline text="Welcome Mr Investor"/>
            <div className="secondary-info">To invest in NEUFUND please follow this steps</div>
            <ProgressBar progress={20}/>
            <div className="column leftColumn">
                <Stepper activeStep={0} orientation="vertical">
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
            </div>
            <div className="column rightColumn">
                <ContractSign />
            </div>
        </div>
    )
};
