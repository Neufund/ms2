import React from 'react';
import {Link} from 'react-router';
import './Login.css';
import Headline from '../ui/Headline';
import Step from './../ui/Step';
import nano2 from '../images/nano2.png';
import nano3 from '../images/nano3.png';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {completed: false};
        setTimeout(()=>{this.setState({completed: true})}, 1000)
    }

    render() {
        return (
            <div className="Login">
                <Headline text="Log in"/>
                <div className="Login-description">
                    Log in with Nano Ledger or <Link to="">Log in with email</Link>
                </div>
                <div className="Login-content">
                    <div>
                        <img className="Login-img" src={nano2} alt="nano2"/>
                        <Step completed={this.state.completed}>Step 1.</Step>
                        <div className="Login-step-text">
                            To authenticate with the Ledger Nano
                            connect the hardware into USB and
                            prepare your PIN for the device
                        </div>
                    </div>
                    <div>
                        <img className="Login-img" src={nano2} alt="nano2"/>
                        <Step completed={this.state.completed}>Step 2.</Step>
                        <div className="Login-step-text">
                            Enter PIN code - use left and right key
                            enter numbers and press two keys at the same time to confirm
                        </div>
                    </div>
                    <div>
                        <img className="Login-img" src={nano3} alt="nano3"/>
                        <Step completed={this.state.completed}>Step 3.</Step>
                        <div className="Login-step-text">
                            Pick Ethereum app - after placing the Ethereum icon
                            in the middle of the Nano Screen press two keys to confirm
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
