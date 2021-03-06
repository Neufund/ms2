import './Ico.scss';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../muiTheme';
import cms from '../cms';

import ProgressBar from "../ui/ProgressBar"

import IcoHeader from "../ui/header/IcoHeader"
import KycStatus from "../ui/ico/KycStatus"
import TimeToICO from "../ui/ico/TimeToICO"
import AmountRaised from "../ui/ico/AmountRaised"
import TotalCreated from "../ui/ico/TotalCreated"
import TimeToEnd from "../ui/ico/TimeToEnd"
import UserPaid from "../ui/ico/UserPaid"

import CurrencySwitcher from "../ui/ico/CurrencySwitcher"
import Message from "../ui/ico/Message"
import AccountDetails from "../ui/ico/AccountDetails"
import Investments from "../ui/ico/Investments"
import ContentMockup from "../ui/ico/ContentMockup"

export default class Ico extends React.Component {
    constructor(props) {
        super(props);

        this.state = {icoState: undefined};
        if (props.location.query.state != undefined) {
            this.state = {icoState: props.location.query.state}
        } else {
            this.state = {icoState: "preico"}
        }
        /* ?state=
         * kycprogress, kycfail, preico, countdown, ico, thankyou, progress, success, fail
         */
    }

    kycStatus = (icoState) => {
        if (icoState == "kycprogress"
            || icoState == "kycfail")
            return <KycStatus progress={icoState == "kycprogress"}/>;
    };

    timeToIco = (icoState) => {
        if (icoState == "kycprogress"
            || icoState == "kycfail"
            || icoState == "preico") {
            return <TimeToICO/>;
        } else if (icoState == "countdown") {
            return <TimeToICO startTime="2017-04-01"/>;
        }
    };

    amountRaised = (icoState) => {
        let data = {
            icoState: icoState,
            EUR: 10000000,
            ETH: 45000000,
            CAP: 80
        };
        if (icoState == "ico"
            || icoState == "thankyou"
            || icoState == "progress"
            || icoState == "success"
            || icoState == "fail") {
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
        let data = {
            icoState: icoState
        };

        if (icoState == "ico"
            || icoState == "thankyou"
            || icoState == "progress") {
            data.endTime = "2017-05-01";
            return <TimeToEnd data={data}/>;
        } else if (icoState == "success"
            || icoState == "fail") {
            data.duration = 2222452;
            data.ethscanUrl = "https://etherscan.io/tx/0x98d0b801ddc8e19db76f32994b697cccfb12519129a5ad0e36d0f246dd16d220";
            data.auditUrl = "http://banciur.org";
            return <TimeToEnd data={data}/>;
        }
    };

    currencySwitcher = (icoState) => {
        let showCurrencySwitcher = true;
        if (icoState == "success" || icoState == "fail") {
            showCurrencySwitcher = false;
        }
        return <CurrencySwitcher currency="EUR" showCurrencySwitcher={showCurrencySwitcher}/>;
    };

    message = (icoState) => {
        let msg;
        switch (icoState) {
            case "ico":
                msg = <p>To finalize the investment please transfer the amount into this bank account:</p>;
                break;
            case "thankyou":
                msg = <h3>Congratulations you are on path to become a NEUFUND investor!</h3>;
                break;
            case "progress":
                msg = <div>
                    <h3>Congratulations you became an investor in NEUFUND</h3>
                    <p>Your neumarks will be available after the end of ICO</p>
                </div>;
                break;
            case "success":
                msg = <h3>Congratulations you became an investor in NEUFUND</h3>;
                break;
            case "fail":
                msg = <h3>You can send your money back. Click pay back to receive a transfer</h3>;
                break;
        }

        if (msg != undefined) {
            return <Message message={msg}/>
        }
    };

    accountDetails = (icoState) => {

        let accountDetails = {
            beneficiary: "NEUFUND",
            iban: "EE 12 3456 7890 1234 5678 7890 1234",
            bic: "TLXXXXX",
            reference: "VC 12345678",
            NUE: 1000000,
            bonus: 15,
            EUR: 1000000
        };

        if (icoState == "kycprogress"
            || icoState == "kycfail"
            || icoState == "preico"
            || icoState == "countdown"
            || icoState == "ico"
            || icoState == "thankyou"
            || icoState == "progress") {
            return <AccountDetails account={accountDetails} icoState={icoState} setIcoState={this.setIcoState}/>;
        }
    };

    investments = (icoState) => {
        let data = {
            icoState: icoState,
            investments: []
        };

        switch (icoState) {
            case "progress":
                data.investments.push({
                    paid: "\u20AC 200 000",
                    source: "EN 123456798456321657987654",
                    reward: "NEU 250 000",
                    status: "...in progress"
                });
                data.investments.push({
                    paid: "\u20AC 800 000",
                    source: "EN 123456798456321657987654",
                    reward: "NEU 800 000",
                    status: "...in progress"
                });
                break;
            case "success":
                data.investments.push({
                    paid: "\u20AC 0",
                    source: "NEUFUND",
                    reward: "NEU 150 000",
                    status: "success"
                });
                data.investments.push({
                    paid: "\u20AC 200 000",
                    source: "EN 123456798456321657987654",
                    reward: "NEU 250 000",
                    status: "success"
                });

                data.investments.push({
                    paid: "\u20AC 800 000",
                    source: "EN 123456798456321657987654",
                    reward: "NEU 800 000",
                    status: "success"
                });
                break;

            case "fail":
                data.investments.push({
                    paid: "\u20AC 0",
                    source: "NEUFUND",
                    reward: "NEU 150 000",
                    status: "unsuccessful"
                });
                data.investments.push({
                    paid: "\u20AC 200 000",
                    source: "EN 123456798456321657987654",
                    reward: "NEU 250 000",
                    status: "pay back"
                });

                data.investments.push({
                    paid: "\u20AC 800 000",
                    source: "EN 123456798456321657987654",
                    reward: "NEU 800 000",
                    status: "pay back"
                });
                break;
        }

        return <Investments investmentsData={data}/>;
    };

    userPaid = (icoState) => {
        let data = {
            EUR: 0,
            ETH: 0,
            NEU: 0,
            icoState: icoState
        };
        switch (icoState) {
            case "progress":
                data.EUR = 1000000;
                data.ETH = 1000;
                data.NEU = 1150000;
                break;
            case "success":
            case "fail":
                data.EUR = 1000000;
                data.ETH = 1000;
                data.NEU = 1150000;
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
                        {this.kycStatus(this.state.icoState)}
                        {this.timeToIco(this.state.icoState)}
                        {this.amountRaised(this.state.icoState)}
                        {this.totalCreated(this.state.icoState)}
                        {this.timeToEnd(this.state.icoState)}
                        {this.userPaid(this.state.icoState)}
                    </div>
                    <div className="topAreaTriangle row"></div>
                    {this.currencySwitcher(this.state.icoState)}
                    {this.message(this.state.icoState)}
                    {this.accountDetails(this.state.icoState)}
                    {this.investments(this.state.icoState)}
                    {this.state.icoState == "preico" &&
                    <ContentMockup/>
                    }
                </div>
            </MuiThemeProvider>
        )
    }
};
