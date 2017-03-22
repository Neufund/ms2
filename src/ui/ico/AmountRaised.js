import React from 'react';
import './AmountRaised.scss';
import cms from '../../cms';

export default (props) => {
    return cms(__filename)(
        <div className="AmountRaised">
            <div className="row">
                <div className="col-sm-1 col-sm-offset-1">
                    Amount raised:
                </div>
                <div className="col-sm-3">
                    <span className="Unit">EUR</span> <span className={props.amountRaisedData.success ? "Number" : "Number Big"}>{props.amountRaisedData.EUR}</span>
                </div>
                <div className="col-sm-2">
                    <span className="Unit">ETH</span> <span className={props.amountRaisedData.success ? "Number" : "Number Big"}>{props.amountRaisedData.ETH}</span>
                </div>
                {
                    props.amountRaisedData.success &&
                    <div className="col-sm-2 Cap">
                        {props.amountRaisedData.CAP.toString()} % of cap
                    </div>
                }
            </div>
        </div>
    )
};