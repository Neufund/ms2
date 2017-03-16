import React from 'react';
import {Link} from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';
import history from '../history';
import {toPromise, toPromiseNoError, wait} from '../utils';
import Ledger from 'ledger-wallet-provider/lib/LedgerWallet';
import './Login.scss';
import Headline from '../ui/Headline';
import Step from './../ui/Step';
import nano2 from '../images/nano2.png';
import nano3 from '../images/nano3.png';
import placeholder from '../images/pitching-i-phone-app-startup.jpg';

const ANIMATION_DURATION = 3000;
const CHECK_INTERVAL = 500;

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            completed: false,
            step: 1,
            browserSupported: true,
            nonNeufundLedger: false,
            showTutorial: false,
            config: null,
            accounts: null
        };
        this.ledger = new Ledger();
    }

    async componentDidMount() {
        await this.ledger.init();
        await toPromiseNoError(this.setState.bind(this), {"browserSupported": this.ledger.isU2FSupported});
        // await toPromiseNoError(this.setState.bind(this), {"browserSupported": false});
        this.connectLedger();
    }

    async connectLedger() {
        try {
            let config = await toPromise(this.ledger.getAppConfig);
            await toPromiseNoError(this.setState.bind(this), {completed: true, config});
            this.onLedgerConnected()
        } catch (error) {
            console.log(error);
            setTimeout(this.connectLedger.bind(this), CHECK_INTERVAL);
        }
    }

    async onLedgerConnected() {
        await wait(ANIMATION_DURATION);
        await toPromiseNoError(this.setState.bind(this), {completed: false, step: 2});
        await this.getAccount();
    }

    async getAccount() {
        try {
            let accounts = await toPromise(this.ledger.getAccounts);
            web3.eth.defaultAccount = accounts[0];
            await toPromiseNoError(this.setState.bind(this), {completed: true, accounts});
            this.onAccountConfirmed()
        } catch (error) {
            console.log(error);
            setTimeout(this.getAccount.bind(this), CHECK_INTERVAL);
        }
    }

    async onAccountConfirmed() {
        await wait(ANIMATION_DURATION);
        console.log(this.state);
        // TODO Check backend
        if (false) {
            await toPromiseNoError(this.setState.bind(this), {nonNeufundLedger: true});
        } else {
            await toPromiseNoError(this.setState.bind(this), {completed: false, step: 3});
            await this.fetchUserData();
        }
    }

    async fetchUserData() {
        //TODO
        await wait(ANIMATION_DURATION);
        this.onUserDataFetched();
    }

    async onUserDataFetched() {
        await toPromiseNoError(this.setState.bind(this), {completed: true});
        await wait(ANIMATION_DURATION);
        history.push("/contracts");
    }

    step1() {
        return (
            <div className="Login-content row">
                <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0">
                    <img className="Login-img" src={nano2} alt="nano2"/>
                    <Step completed={this.state.completed}>Step 1.</Step>
                    <div className="Login-step-text">
                        To authenticate with the Ledger Nano
                        connect the hardware into USB and
                        prepare your PIN for the device
                    </div>
                </div>
                <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0">
                    <img className="Login-img" src={nano2} alt="nano2"/>
                    <Step completed={this.state.completed}>Step 2.</Step>
                    <div className="Login-step-text">
                        Enter PIN code - use left and right key
                        enter numbers and press two keys at the same time to confirm
                    </div>
                </div>
                <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0">
                    <img className="Login-img" src={nano3} alt="nano3"/>
                    <Step completed={this.state.completed}>Step 3.</Step>
                    <div className="Login-step-text">
                        Pick Ethereum app - after placing the Ethereum icon
                        in the middle of the Nano Screen press two keys to confirm
                    </div>
                </div>
            </div>
        );
    }

    step2() {
        return (
            <div className="Login-content Login-connected row">
                <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4">
                    <div className="box">
                        <img className="Login-img" src={nano2} alt="nano2"/>
                        <Step completed={this.state.completed}>Last step.</Step>
                        <div className="Login-step-text">
                            Press both buttons on the device to confirm your account.
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    step3() {
        return (
            <div className="Login-content row">
                <div className="col-xs-12">
                    <div className="waitingForData">
                        {
                            this.state.completed
                                ?
                                <div>
                                    <Step completed={this.state.completed}>Authentication completed</Step>
                                    Welcome Mr. Investor
                                </div>
                                :
                                <div>
                                    <div>Fetching your data...</div>
                                    <CircularProgress className="progress" size={80} thickness={5}/>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }

    browserNotSupported =
        <div>
            Your browser is not supported. Sorry
        </div>;

    nonNeufundLedger =
        <div>
            Your ledger is not supported by NeuFund
        </div>;


    skipTutorialSection =
        <div className="Login-content row">
            <div className="col-xs-12">
                <img className="Login-tutorial-photo" src={placeholder} alt="placeholder"/>
            </div>
        </div>;

    toggleTutorial = () => {
        this.setState({showTutorial: !this.state.showTutorial});
    };

    render() {
        let step;
        let tutorialText;

        if (!this.state.browserSupported) {
            step = this.browserNotSupported;
            tutorialText = "";
        } else if (this.state.nonNeufundLedger) {
            step = this.nonNeufundLedger;
            tutorialText = "";
        } else if (this.state.showTutorial) {
            step = this.skipTutorialSection;

            tutorialText = 'Show tutorial';
        }
        else {
            tutorialText = 'Hide tutorial';
            switch (this.state.step) {
                case 1:
                    step = this.step1();
                    break;
                case 2:
                    step = this.step2();
                    break;
                default:
                    step = this.step3();
                    break;
            }
        }

        return (
            <div className="App-content">
                <Headline text="Log in"/>
                <div className="secondary-info">
                    Log in with Nano Ledger or <Link to="">Log in with email</Link> <span onClick={this.toggleTutorial}
                                                                                          className="TutorialSwitch">{tutorialText}</span>
                </div>
                {step}
            </div>
        )
    }
}

export default Login;
