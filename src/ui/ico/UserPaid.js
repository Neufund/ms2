import React from 'react';
import './UserPaid.scss';
import cms from '../../cms';

export default () => {
    return cms(__filename)(
        <div className="Section">
            <div className="row">
                <div className="col-md-1 col-md-offset-1">
                    You payed:
                </div>
                <div className="col-md-3">
                    EUR 0
                </div>
                <div className="col-md-2">
                    You pledged:
                </div>
                <div className="col-md-1">
                    0
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-md-offset-2">
                    ETH 0
                </div>
            </div>
        </div>
    )
};