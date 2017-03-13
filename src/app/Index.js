import React from 'react';
import {Link} from 'react-router';
import './Index.css';
import Headline from '../ui/Headline';
import RaisedButton from 'material-ui/RaisedButton';

export default () => {
    return (
        <div className="Index">
            <Headline text="Welcome to the Presale"/>
            <div className="Index-description">
                To finalize your participation in NEUFUND Fund,
                you will be required to log in to the NEUFUND Platform
            </div>
            <div className="Index-content">
                <h4>You need following items:</h4>
                <div className="Index-items">
                    <div>
                        <div className="Index-img"></div>
                        Nano Legder
                    </div>
                    <div>
                        <div className="Index-img"></div>
                        PIN code
                    </div>
                    <div>
                        <div className="Index-img"></div>
                        Your ID card or Passport (optionally)
                    </div>
                </div>
                <div className="Index-button-wrap">
                    <Link to="/login" className="Index-button">
                        <RaisedButton label="Default"/>
                    </Link>
                </div>
            </div>
        </div>
    )
};
