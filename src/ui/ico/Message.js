import React from 'react';
import './Message.scss';
import cms from '../../cms';

export default (props) => {
    return cms(__filename)(
        <div>
            <div className="row">
                <div className="col-md-7 col-md-offset-3">
                    {props.message}
                </div>
            </div>
        </div>
    )
};