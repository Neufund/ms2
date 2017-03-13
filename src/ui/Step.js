import React from 'react';
import './Step.css'

export default ({children}) => {
    return (
        <div className="Step">
            <input type="radio"/>
            <label>{children}</label>
        </div>
    )
}