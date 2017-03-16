import './Logout.scss';

import React from 'react';
import {Link} from 'react-router';
import Headline from '../ui/Headline';
import Image from "../images/download.png"

export default () => {
    return (
        <div className="App-content Logout">
            <Headline text="You are logged out"/>
            <div className="row">
                <div className="col-xs-8 col-xs-offset-2">
                    <p>
                        Your Ledger Nano was disconnected! <br />
                        If you want to log in connect the Ledger again
                    </p>
                    <img src={Image} alt="dummy something"/>
                    <Link to="/login">Log in again</Link>
                </div>

            </div>
        </div>
    )
};