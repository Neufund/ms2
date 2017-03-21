import React from 'react';
import './Transfer.scss';
import cms from '../../cms';

export default (props) => {
    return (
        <div className="Section">
            <div className="row">
                <div className="col-md-2 col-md-offset-1">
                    Transfer
                </div>
            </div>
            {props.showCurrencySwitcher &&
                <div className="row">
                    <div className="col-md-2 col-md-offset-1">
                        EUR | ETH
                    </div>
                </div>
            }
        </div>
    )
};