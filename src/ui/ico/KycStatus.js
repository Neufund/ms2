import React from 'react';
import './KycStatus.scss';
import cms from '../../cms';

export default (props) => {
    let element;

    if (props.progress) {
        element = <div className="row KYC-status Progress">
            <div className="col-sm-10 col-sm-offset-1">
                <h3>Identity check</h3>
                <div>
                    Your identity is beeing checked.<br />
                    We will send you a notification when it is finish.
                </div>
            </div>
        </div>
    } else {
        element = <div className="row KYC-status Fail">
            <div className="col-sm-10 col-sm-offset-1">
                <h3>Identity check error <i className="icon material-icons">report_problem</i></h3>
                <div> Something went wrong  with the identity check <span className="edit" onClick={() => alert("Placeholder")}>Edit</span></div>
            </div>
        </div>
    }
    return cms(__filename)(
       element
    )
};