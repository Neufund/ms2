import React from 'react';
import './EmailChange.scss';
import cms from '../../cms';

export default () => {
    return cms(__filename)(
        <div>
            <div className="row">
                <div className="col-md-7 col-md-offset-2">
                    e-mail@address.com &nbsp;&nbsp;&nbsp; X
                </div>
            </div>
        </div>
    )
};