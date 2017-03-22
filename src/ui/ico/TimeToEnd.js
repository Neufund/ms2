import React from 'react';
import './TimeToEnd.scss';
import cms from '../../cms';

export default (props) => {
    return cms(__filename)(
        <div>
            <div className="row">
                <div className="col-md-1 col-md-offset-1">
                    ICO finishes
                </div>
                <div className="col-md-3">
                    {props.success ?
                        'FINALIZED IN 25MIN and 12 SECONDS'
                        :
                        'D15 H21 M38 S01'
                    }
                </div>
            </div>
        </div>
    )
};