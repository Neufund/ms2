import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let App = ({children}) => {
    return (
        <MuiThemeProvider>
            {children}
        </MuiThemeProvider>
    )
};

export default App;
