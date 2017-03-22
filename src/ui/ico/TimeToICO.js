import React from 'react';
import './TimeToICO.scss';
import cms from '../../cms';

import Timer from '../Timer'

export default (props) => {

    return cms(__filename)(
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-2 col-sm-offset-1">
                    Time left to ICO
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4 col-sm-offset-2">
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