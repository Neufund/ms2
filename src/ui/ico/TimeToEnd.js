import React from 'react';
import './TimeToEnd.scss';
import cms from '../../cms';

export default (props) => {
    return cms(__filename)(
        <div className="Section">
            <div className="row">
                <div className="col-md-2 col-md-offset-1">
                    ICO finishes
                </div>
                <div className="col-md-4">
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