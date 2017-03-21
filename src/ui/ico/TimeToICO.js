import React from 'react';
import './TimeToICO.scss';
import cms from '../../cms';

export default (props) => {
    return cms(__filename)(
        <div className="Section">
            <div className="row">
                <div className="col-md-2 col-md-offset-1">
                    Time left to ICO
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-md-offset-3">
                    {props.preIco ?
                        'WE WILL ANNOUNCE NEUFUND ICO THIS YEAR'
                        :
                        'D12 H45 M12 S01'
                    }
                </div>
            </div>
        </div>
    )
};