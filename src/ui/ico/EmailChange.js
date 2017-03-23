import React from 'react';
import './EmailChange.scss';
import cms from '../../cms';

export default () => {
    return cms(__filename)(
        <div className="EmailChange">
            <div className="row">
                <div className="col-sm-9 col-sm-offset-2">
                    <b>e-mail@address.com</b> <span className="ChangeButton"
                                                    onClick={() => alert("e-mail change to implement")}>X</span>
                </div>
            </div>
        </div>
    )
};