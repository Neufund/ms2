import React from 'react';
import ProgressBar from '../ui/ProgressBar';
import Headline from '../ui/Headline';
import ContractSign from '../ui/ContractSign';
import StepperWrapper from '../ui/StepperWrapper';
import './Contracts.scss';
import cms from '../cms';

export default () => {
    return cms(__filename)(
        <div className="App-content">
            <Headline text="Welcome Mr Investor"/>
            <div className="secondary-info">To invest in NEUFUND please follow this steps</div>
            <ProgressBar progress={20}/>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <StepperWrapper step={0}/>
                </div>
                <div className="col-xs-12 col-sm-8">
                    <ContractSign />
                </div>
            </div>
        </div>
    );
}

