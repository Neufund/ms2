import React from 'react';
import './Index.css';
import Logo from '../../images/NeuFund_logo_full_white_72dpi.png';

export default () => {
    return (
        <div className="row">
            <div className="col-xs-12 col-lg-10 col-lg-offset-1">
                <div className="Header">
                    <img src={Logo} alt="Logo" className="Header-logo"/>
                </div>
            </div>
        </div>
    )
};
