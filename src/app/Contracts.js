import React from 'react';
import ProgressBar from '../ui/ProgressBar';
import Headline from '../ui/Headline';
import ContractSign from '../ui/ContractSign';
import StepperWrapper from '../ui/StepperWrapper';
import './Contracts.css';


export default () => {
    return (
        <div className="Contracts">

            <Headline text="Welcome Mr Investor"/>
            <div className="secondary-info">To invest in NEUFUND please follow this steps</div>
            <ProgressBar progress={20}/>
            <div className="column leftColumn">
                <StepperWrapper step={0} />
            </div>
            <div className="column rightColumn">
                <ContractSign />
            </div>
        </div>
    )
};
