import React from 'react';
import './TimeToEnd.scss';
import cms from '../../cms';

import Timer from '../Timer'

export default (props) => {

    let icoFinished = props.endStatus != undefined;

    return cms(__filename)(
        <div className="TimeToEnd">
            <div className="row">
                <div className="col-sm-1 col-sm-offset-1">
                    ICO finishes
                </div>
                {icoFinished ?
                <div className="col-sm-5">
                    <div className="icoDuration">FINALIZED IN 25MIN and 12 SECONDS</div>
                    <div className="links">
                        <a target="_blank" href={props.endStatus.ethscanUrl}>Life on etherscan.io</a>
                        <a target="_blank" href={props.endStatus.auditUrl}>Audit</a>
                    </div>
                </div>
                :
                <div className="col-sm-5">
                    <Timer className="Timer" toTime={props.endTime}/>
                </div>
                }

            </div>
        </div>
    )
};