import React from 'react';
import './IcoHeader.scss';
import cms from '../../cms';

export default () => {
    return cms(__filename)(
        <div className="Header">
            <div className="Logo"></div>
            <div className="UserSection">
                <div className="UserPanel">
                    <i className="material-icons">account_circle</i>
                    <i className="material-icons">details</i>
                </div>
                <span className="Logout">LOGOUT</span>
            </div>
        </div>
    )
};
