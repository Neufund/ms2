import React from 'react';
import './Investments.scss';
import cms from '../../cms';

export default (props) => {
    return cms(__filename)(
        <div>
            <div className="row">
                <div className="col-md-2 col-md-offset-1">
                    Your Investments
                </div>
            </div>
            {props.data.msg != '' &&
                <div className="row">
                    <div className="col-md-2 col-md-offset-1">
                        {props.data.msg}
                    </div>
                </div>
            }

            {props.data.investments.length > 0 &&
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <table>
                            <thead>
                                <tr>
                                    <td>Payed</td>
                                    <td>Source</td>
                                    <td>Reward</td>
                                    <td> </td>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data.investments.map((row) =>
                                    <tr>
                                        <td>{row.payed}</td>
                                        <td>{row.source}</td>
                                        <td>{row.reward}</td>
                                        <td>{row.status}</td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    )
};