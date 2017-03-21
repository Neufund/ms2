import React from 'react';
import './IcoHeader.scss';
import cms from '../../cms';

export default (props) => {
    return cms(__filename)(
        <div className="row topArea">
            <div className="col-xs-12 col-md-10 col-md-offset-1">
                <div className="stateChanger" onClick={() => props.setIcoState("preico")}>preico</div>
                <div className="stateChanger" onClick={() => props.setIcoState("countdown")}>countdown</div>
                <div className="stateChanger" onClick={() => props.setIcoState("ico")}>ico</div>
                <div className="stateChanger" onClick={() => props.setIcoState("thankyou")}>thankyou</div>
                <div className="stateChanger" onClick={() => props.setIcoState("progress")}>progress</div>
                <div className="stateChanger" onClick={() => props.setIcoState("success")}>success</div>

                <div className="Header">
                    <div className="Logo"></div>
                    <div className="UserSection">
                        <div className="UserPanel" onClick={() => {alert("this will open LPA, KYC")}}>
                            <i className="material-icons iconUser">account_circle</i>
                            <i className="material-icons iconArrow">details</i>
                        </div>
                        <span className="Logout" onClick={() => {alert("this will log you out")}}>LOGOUT</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
