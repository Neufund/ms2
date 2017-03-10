import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import App from './app/App';
import Index from './app/Index';
import NotFound from './app/NotFound';
import './index.css';

ReactDOM.render((
        <Router history={browserHistory}>
            <Route component={App}>
                <Route path="/" component={Index}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    ),
    document.getElementById('root')
);
