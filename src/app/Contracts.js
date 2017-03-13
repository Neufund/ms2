import React from 'react';
import ProgressBar from '../ui/ProgressBar';
import './Contracts.css';

export default () => {
    return (
        <div className="Contracts">
            <ProgressBar progress={20}/>
            <div className="column leftColumn">

            </div>
            <div className="column rightColumn">
            </div>
        </div>
    )
};
