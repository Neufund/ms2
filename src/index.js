import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import history from './history';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './app/App.js';
import Index from './app/Index.js';
import Login from './app/Login.js';
import Logout from './app/Logout.js';
import Contracts from './app/Contracts.js';
import KYC from './app/KYC.js';
import Ico from './app/Ico.js';
import './index.scss';
import 'flexboxgrid'
import web3 from './web3';
import LedgerLoginProvider from './ledgerLoginProvider';

(async function app() {
    await web3.initWeb3();
    LedgerLoginProvider.start();
    injectTapEventPlugin();
    ReactDOM.render((
            <Router history={history}>
                <Route component={App}>
                    <Route path="/" component={Index}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/contracts" component={Contracts}/>
                    <Route path="/kyc" component={KYC}/>
                    <Route path="/logout" component={Logout}/>
                </Route>
                <Route path="/ico" component={Ico}/>
            </Router>
        ),
        document.getElementById('root')
    );
})();
