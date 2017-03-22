import React from 'react';
import './Transfer.scss';
import cms from '../../cms';

export default (props) => {
    return cms(__filename)(
        <div>
            <div className="row">
                <div className="col-sm-2 col-sm-offset-1">
                    Transfer
                </div>
            </div>
            {props.showCurrencySwitcher &&
                <div className="row">
                    <div className="col-sm-2 col-sm-offset-1">
                        EUR | ETH
                    </div>
                </div>
            }
        </div>
    )
};