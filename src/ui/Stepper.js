import React from 'react';
import './Stepper.css';

export default ({progress}) => {
    return (
        <div className="Stepper">
            <div className="Progress" style={{width: `${progress}%`}}></div>
        </div>
    )
};
