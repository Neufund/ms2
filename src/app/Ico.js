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
import TimeToEnd from "../ui/ico/TimeToEnd"
import UserPaid from "../ui/ico/UserPaid"

import CurrencySwitcher from "../ui/ico/CurrencySwitcher"
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
        if (icoState == "preico") {
            return <TimeToICO/>;
        } else if (icoState == "countdown") {
            return <TimeToICO startTime="2017-04-01"/>;
        }
    };

    amountRaised = (icoState) => {
        let data = {
            EUR: 10000000,
            ETH: 45000000,
            CAP: 80
        };
        if (icoState == "ico"
            || icoState == "thankyou"
            || icoState == "progress"
            || icoState == "success") {
            data.success = icoState == "success";
            return <AmountRaised amountRaisedData={data}/>;
        }
    };

    totalCreated = (icoState) => {
        let data = {
            NEU: 10000000,
            participants: 30
        };
        if (icoState == "ico"
            || icoState == "thankyou"
            || icoState == "progress"
            || icoState == "success") {
            data.success = icoState == "success";
            return <TotalCreated totalCreated={data}/>;
        }
    };

    timeToEnd = (icoState) => {
        if (icoState == "ico"
            || icoState == "thankyou"
            || icoState == "progress") {
            return <TimeToEnd endTime="2017-05-01"/>;
        } else if (icoState == "success") {
            return <TimeToEnd endStatus={{
                duration: 2222452,
                ethscanUrl: "https://etherscan.io/tx/0x98d0b801ddc8e19db76f32994b697cccfb12519129a5ad0e36d0f246dd16d220",
                auditUrl: "http://banciur.org"
            }}/>;
        }
    };

    currencySwitcher = (icoState) => {
        return <CurrencySwitcher currency="EUR" showCurrencySwitcher={icoState !== "success"}/>;
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

    investments = (icoState) => {
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

    userPaid = (icoState) => {
        let data = {
            EUR: 0,
            ETH: 0,
            NEU: 0,
            success: false
        };
        switch (icoState) {
            case "progress":
                data.EUR = 1000000;
                data.ETH = 1000;
                data.NEU = 1150000;
                break;
            case "success":
                data.EUR = 1000000;
                data.ETH = 1000;
                data.NEU = 1150000;
                data.success = true;
                break;
        }
        return <UserPaid userPaidData={data}/>;
    };

    setIcoState = (state) => {
        this.setState({icoState: state});
    };

    render() {
        return cms(__filename)(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <ProgressBar progress={60} ico={false}/>
                    <div className="topArea">
                        <IcoHeader setIcoState={this.setIcoState}/>
                        {this.timeToIco(this.state.icoState)}
                        {this.amountRaised(this.state.icoState)}
                        {this.totalCreated(this.state.icoState)}
                        {this.timeToEnd(this.state.icoState)}
                        {this.userPaid(this.state.icoState)}
                    </div>
                    <div className="topAreaTriangle row"></div>
                    {this.currencySwitcher(this.state.icoState)}
                    {this.message(this.state.icoState)}
                    {this.emailChange(this.state.icoState)}
                    {this.accountDetails(this.state.icoState)}
                    {this.investments(this.state.icoState)}
                </div>
            </MuiThemeProvider>
        )
    }
};
