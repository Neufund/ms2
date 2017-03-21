import './Ico.scss';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../muiTheme';
import cms from '../cms';

import ProgressBar from "../ui/ProgressBar"

import IcoHeader from "../ui/header/IcoHeader"
import TimeToICO from "../ui/ico/TimeToICO"
import AmountRaised from "../ui/ico/AmountRaised"
import TotalCreated from "../ui/ico/TotalCreated"
import Timer from "../ui/ico/Timer"
import UserPayed from "../ui/ico/UserPaid"

export default class Ico extends React.Component {
    constructor(props) {
        super(props);

        this.state = {icoState: undefined};
        if (props.location.query.state != undefined) {
            this.state = {icoState: props.location.query.state}
        }
        /* ?state=
         * preico, countdown, ico, thankyou, progress, success
         */
    }

    timeToIco = (icoState) => {
        if (icoState == "preico" || icoState == "countdown") {
            return <TimeToICO preIco={icoState == "preico"}/>;
        } else {
            return <div></div>;
        }
    };

    amountRaised = (icoState) => {
        if (icoState == "ico"
            || icoState == "thankyou"
            || icoState == "progress"
            || icoState == "success") {
            return <AmountRaised/>;
        } else {
            return <div></div>;
        }
    };

    totalCreated = (icoState) => {
        if (icoState == "ico"
            || icoState == "thankyou"
            || icoState == "progress"
            || icoState == "success") {
            return <TotalCreated/>;
        } else {
            return <div></div>;
        }
    };

    timer = (icoState) => {
        if (icoState == "ico"
            || icoState == "thankyou"
            || icoState == "progress"
            || icoState == "success") {
            return <Timer success={icoState == "success"}/>;
        } else { 
            return <div></div>;
        }
    };

    setIcoState = (state) => {
        this.setState({icoState: state});
    };

    render() {

        let icoState = this.state.icoState;

        return cms(__filename)(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <ProgressBar progress={60} ico={false}/>
                    <div className="topArea">
                        <IcoHeader setIcoState={this.setIcoState}/>
                        {this.timeToIco(icoState)}
                        {this.amountRaised(icoState)}
                        {this.totalCreated(icoState)}
                        {this.timer(icoState)}

                        <UserPayed />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
};
