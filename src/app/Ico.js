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
import UserPaid from "../ui/ico/UserPaid"

import Transfer from "../ui/ico/Transfer"

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
        }
    };

    amountRaised = (icoState) => {
        if (icoState == "ico"
            || icoState == "thankyou"
            || icoState == "progress"
            || icoState == "success") {
            return <AmountRaised/>;
        }
    };

    totalCreated = (icoState) => {
        if (icoState == "ico"
            || icoState == "thankyou"
            || icoState == "progress"
            || icoState == "success") {
            return <TotalCreated/>;
        }
    };

    timer = (icoState) => {
        if (icoState == "ico"
            || icoState == "thankyou"
            || icoState == "progress"
            || icoState == "success") {
            return <Timer success={icoState == "success"}/>;
        }
    };

    transfer = (icoState) => {
        return <Transfer showCurrencySwitcher={icoState !== "success"}/>;
    };

    setIcoState = (state) => {
        this.setState({icoState: state});
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <ProgressBar progress={60} ico={false}/>
                    <div className="topArea">
                        <IcoHeader setIcoState={this.setIcoState}/>
                        {this.timeToIco(this.state.icoState)}
                        {this.amountRaised(this.state.icoState)}
                        {this.totalCreated(this.state.icoState)}
                        {this.timer(this.state.icoState)}

                        <UserPaid />
                    </div>
                    {this.transfer(this.state.icoState)}
                </div>
            </MuiThemeProvider>
        )
    }
};
