import React from 'react';
import Stepper from '../ui/Stepper';
import Headline from '../ui/Headline';
import './KYC.css';

export default () => {
    return (
        <div className="KYC">
            <Headline text="Welcome Mr Investor"/>
            <div className="KYC-description">To invest in NEUFUND please follow the steps</div>
            <Stepper progress="40"/>
            <div className="column leftColumn">

            </div>
            <div className="column rightColumn">
            </div>
        </div>
    )
};
