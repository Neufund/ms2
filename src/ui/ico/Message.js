import React from 'react';
import './Message.scss';
import cms from '../../cms';

export default (props) => {
    return cms(__filename)(
        <div>
            <div className="row">
                <div className="col-sm-7 col-sm-offset-2">
                    {props.message}
                </div>
            </div>
        </div>
    )
};