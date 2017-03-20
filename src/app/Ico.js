import './Ico.scss';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../muiTheme';
import cms from '../cms';

import ProgressBar from "../ui/ProgressBar"

import IcoHeader from "../ui/header/IcoHeader.js"

export default () => {
    return cms(__filename)(
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <ProgressBar progress={60} ico={false}/>
                <div className="row topArea">
                    <div className="col-xs-12 col-md-10 col-md-offset-1">
                        <IcoHeader/>
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
    )
};
