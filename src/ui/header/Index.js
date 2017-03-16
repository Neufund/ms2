import React from 'react';
import './Index.scss';
import Logo from '../../images/NeuFund_logo_full_white_72dpi.png';

export default () => {
    return (
        <div className="Header">
            <img src={Logo} alt="Logo" className="Header-logo"/>
        </div>
    )
};
