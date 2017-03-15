import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";
import {Router, Route, browserHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './app/App.js';
import Index from './app/Index.js';
import Login from './app/Login.js';
import Logout from './app/Logout.js';
import Contracts from './app/Contracts.js';
import KYC from './app/KYC.js';
import NotFound from './app/NotFound';
import './index.css';
import 'flexboxgrid'

injectTapEventPlugin();
ReactDOM.render((
        <Router history={browserHistory}>
            <Route component={App}>
                <Route path="/" component={Index}/>
                <Route path="/login" component={Login}/>
                <Route path="/contracts" component={Contracts}/>
                <Route path="/kyc" component={KYC}/>
                <Route path="/logout" component={Logout}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    ),
    document.getElementById('root')
);
