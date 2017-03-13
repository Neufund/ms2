import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../ui/header/Index';
import Footer from '../ui/footer/Index';
import muiTheme from '../muiTheme';

export default ({children}) => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div className="App">
                <div className="App-container">
                    <Header/>
                    <div className="App-content">
                        {children}
                    </div>
                    <Footer/>
                </div>
            </div>
        </MuiThemeProvider>
    )
};
