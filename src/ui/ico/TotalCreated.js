import React from 'react';
import './TotalCreated.scss';
import cms from '../../cms';

export default (props) => {
    return cms(__filename)(
        <div className="TotalCreated">
            <div className="row">
                <div className="col-md-1 col-md-offset-1">
                    Total created NM:
                </div>
                <div className="col-md-3">
                    <span className="Unit">NEU</span> <span className="Number">{props.totalCreated.NEU.toString()}</span>
                </div>

                {!props.totalCreated.success &&
                <div className="col-md-2">
                    Number of participants:
                </div>
                }
                {!props.totalCreated.success &&
                <div className="col-md-1">
                    <span className="Number">{props.totalCreated.participants.toString()}</span>
                </div>
                }
            </div>
        </div>
    )
};