import React from 'react';
import './TotalCreated.scss';
import cms from '../../cms';

export default () => {
    return cms(__filename)(
        <div className="Section">
            <div className="row">
                <div className="col-md-2 col-md-offset-1">
                    Total created NM:
                </div>
                <div className="col-md-4">
                    NEU 50 000 000
                </div>
                <div className="col-md-2">
                    Number of participants:
                </div>

                <div className="col-md-1">
                    12
                </div>
            </div>
        </div>
    )
};