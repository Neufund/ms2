import React from 'react';
import './Step.css'

export default ({children, completed}) => {
    return (
        <div className="Step">
            {completed
                ? <div className="Step-indicator active"></div>
                : <div className="Step-indicator"></div>
            }
            <div className="Step-label">{children}</div>
        </div>
    )
}