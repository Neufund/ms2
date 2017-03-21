import React from 'react';
import './AmountRaised.scss';
import cms from '../../cms';

export default () => {
    return cms(__filename)(
        <div className="Section">
            <div className="row">
                <div className="col-md-2 col-md-offset-1">
                    Amount raised:
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-md-offset-3">
                    EUR 10 000 000, 00
                </div>
                <div className="col-md-4">
                    EUR 10 000 000, 00
                </div>
            </div>
        </div>
    )
};