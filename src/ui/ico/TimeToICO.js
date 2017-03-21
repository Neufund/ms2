import React from 'react';
import './TimeToICO.scss';
import cms from '../../cms';

import Timer from '../Timer'

export default (props) => {

    return (
        <div className="Section">
            <div className="row">
                <div className="col-xs-12 col-md-2 col-md-offset-1">
                    Time left to ICO
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-4 col-md-offset-3">
                    {props.startTime == undefined ?
                        <span className="strong">WE WILL ANNOUNCE NEUFUND ICO THIS YEAR</span>
                        :
                        <Timer className="timeToIco" toTime={props.startTime}/>
                    }
                </div>
            </div>
        </div>
    )
};