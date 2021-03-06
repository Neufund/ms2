import React from 'react';
import './UserPaid.scss';
import cms from '../../cms';

import FlatButton from 'material-ui/FlatButton'

export default (props) => {
    return cms(__filename)(
        <div className="UserPaid">
            <div className="row first">
                <div className="col-sm-1 col-sm-offset-1">
                    You paid:
                </div>
                <div className="col-sm-3">
                    <span className="Unit">EUR</span> <span
                    className="Number">{props.userPaidData.EUR.toString()}</span>
                </div>
                <div className="col-sm-2">
                    {props.userPaidData.icoState == "success" ? "You have:" : "You pledged:"}
                </div>
                <div className="col-sm-2">
                    <span className="Unit">NEU</span> <span
                    className={props.userPaidData.icoState == "success" ? "Number Neu Big" : "Number Neu"}>{props.userPaidData.NEU.toString()}</span>
                </div>
                {
                    props.userPaidData.icoState == "fail" &&
                    <div className="col-sm-2">
                        <FlatButton className="ButtonPayBack" label="PayBack"/>
                    </div>
                }
            </div>

            <div className="row">
                <div className="col-sm-3 col-sm-offset-2">
                    <span className="Unit">ETH</span> <span
                    className="Number">{props.userPaidData.ETH.toString()}</span>
                </div>
            </div>
            {/* temporary spacer */}
            <div className="row" style={{
                height: "1rem"
            }}></div>
        </div>
    )
};