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
import Message from "../ui/ico/Message"
import EmailChange from "../ui/ico/EmailChange"
import AccountDetails from "../ui/ico/AccountDetails"
import Investments from "../ui/ico/Investments"

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

    message = (icoState) => {
        let msg;
        switch (icoState) {
            case "preico":
            case "countdown":
                msg = <div>
                    <p>Only with neufund you can take part in the ICO through the bank transfer!</p>
                    <p>The bank account number will be realised soon!</p>
                    <p>We will send you reminder on your email:</p>
                </div>;
                break;
            case "ico":
                msg = "To finalize the investment please transfer the amount into this bank account:";
                break;
            case "thankyou":
                msg = <b>Congratulations you are on path to become a NEUFUND investor!</b>;
                break;
            case "progress":
                msg = <div>
                    <p>Congratulations you became an investor in NEUFUND</p>
                    <p>Your neumarks will be available after the end of ICO</p>
                </div>;
                break;
            case "success":
                msg = <p>Congratulations you became an investor in NEUFUND</p>;
                break;
        }
        return <Message message={msg}/>

    };

    emailChange = (icoState) => {
        if (icoState == "preico" || icoState == "countdown") {
            return <EmailChange/>;
        }
    };

    accountDetails = (icoState) => {
        if (icoState == "ico"
            || icoState == "thankyou"
            || icoState == "progress") {
            return <AccountDetails/>;
        }
    };

    investments  = (icoState) => {
        let data = {
            msg: '',
            investments: []
        };

        switch (icoState) {
            case "preico":
            case "countdown":
            case "ico":
                data.msg = "You have not yet invested";
                break;
            case "thankyou":
                data.msg = "We have not recieved your investment";
                break;
            case "progress":
                data.investments.push({
                    payed: "200 000",
                    source: "EN 123456798456321657987654",
                    reward: "NEU 250 000",
                    status: "IN PROGRESS"
                });

                data.investments.push({
                    payed: "800 000 e",
                    source: "EN 123456798456321657987654",
                    reward: "NEU 800 000",
                    status: "IN PROGRESS"
                });
                break;
            case "success":
                data.investments.push({
                    payed: "0 e",
                    source: "NEUFUND",
                    reward: "NEU 150 000",
                    status: "SUCESS"
                });
                data.investments.push({
                    payed: "200 000",
                    source: "EN 123456798456321657987654",
                    reward: "NEU 250 000",
                    status: "SUCESS"
                });

                data.investments.push({
                    payed: "800 000 e",
                    source: "EN 123456798456321657987654",
                    reward: "NEU 800 000",
                    status: "SUCESS"
                });
                break;
        }

        return <Investments data={data}/>;
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
                    {this.message(this.state.icoState)}
                    {this.emailChange(this.state.icoState)}
                    {this.accountDetails(this.state.icoState)}
                    {this.investments(this.state.icoState)}
                </div>
            </MuiThemeProvider>
        )
    }
};
