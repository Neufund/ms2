import React from 'react';
import './App.css';

let App = ({children}) => {
    return (
        <div className="App">
            <div className="App-header">
                <h2>Welcome to React</h2>
            </div>
            {children}
        </div>
    )
};

export default App;
