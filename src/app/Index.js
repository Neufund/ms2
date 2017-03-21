import React from 'react';
import {Link} from 'react-router';
import './Index.scss';
import Headline from '../ui/Headline';
import RaisedButton from 'material-ui/RaisedButton';
import cms from '../cms';
import history from '../history';

class Index extends React.Component {
    componentWillMount() {
        if (window.localStorage.seenBefore) {
            history.push("/login");
        } else {
            window.localStorage.seenBefore = true;
        }
    }

    render() {
        return cms(__filename)(
            <div className="App-content">
                <Headline text="Welcome to the Presale"/>
                <div className="secondary-info">
                    To finalize your participation in NEUFUND Fund, you will be required to log in to the NEUFUND
                    Platform
                </div>
                <h4>You need following items:</h4>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1 col-sm-2 col-sm-offset-2 item">
                        <div className="Index-img"></div>
                        Nano Legder
                    </div>
                    <div className="col-xs-10 col-xs-offset-1 col-sm-2 col-sm-offset-1 item">
                        <div className="Index-img"></div>
                        PIN code
                    </div>
                    <div className="col-xs-10 col-xs-offset-1 col-sm-2 col-sm-offset-1 item">
                        <div className="Index-img"></div>
                        Your ID card or Passport (optionally)
                    </div>
                </div>
                <div className="Index-button-wrap">
                    <Link to="/login" className="Index-button">
                        <RaisedButton label="Continue to log in"/>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Index;