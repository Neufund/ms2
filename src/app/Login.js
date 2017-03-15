import React from 'react';
import {Link} from 'react-router';
import {toPromiseNoError, wait} from '../utils';
import history from '../history';
import './Login.css';
import Headline from '../ui/Headline';
import Step from './../ui/Step';
import nano2 from '../images/nano2.png';
import nano3 from '../images/nano3.png';

const ANIMATION_DURATION = 1000;
const CHECK_INTERVAL = 500;

class Login extends React.Component {
    constructor() {
        super();
        this.state = {completed: false, connected: false};
        this.eth = null;
    }

    async componentDidMount(){
        const comm = await window.ledger.comm_u2f.create_async();
        this.eth = new window.ledger.eth(comm);
        this.waitForLedger();
    }

    async componentWillUnmount(){
        await this.eth.comm.close_async();
    }

    async waitForLedger() {
        try {
            let config = await this.eth.getAppConfiguration_async();
            this.onLedgerConnected()
        } catch (error) {
            console.log(error);
            setTimeout(this.waitForLedger.bind(this), CHECK_INTERVAL);
        }
    }

    async onLedgerConnected() {
        await toPromiseNoError(this.setState.bind(this), {completed: true, connected: false});
        await wait(ANIMATION_DURATION);
        await toPromiseNoError(this.setState.bind(this), {completed: false, connected: true});
        await this.waitForAccountConfirmation();
    }

    async waitForAccountConfirmation() {
        try {
            let accounts = await this.eth.getAddress_async("44'/60'/0'/0", true, true);
            this.onAccountConfirmed()
        } catch (error) {
            console.log(error);
            setTimeout(this.waitForAccountConfirmation.bind(this), CHECK_INTERVAL);
        }
    }

    async onAccountConfirmed() {
        await toPromiseNoError(this.setState.bind(this), {completed: true, connected: true});
        await wait(ANIMATION_DURATION);
        history.push("/contracts");
    }

    render() {
        return (
            <div className="App-content">
                <Headline text="Log in"/>
                <div className="secondary-info">
                    Log in with Nano Ledger or <Link to="">Log in with email</Link>
                </div>
                {this.state.connected
                    ?
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
                    :
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
                }
            </div>
        )
    }
}

export default Login;
