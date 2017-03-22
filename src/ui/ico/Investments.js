import React from 'react';
import './Investments.scss';
import cms from '../../cms';

export default (props) => {
    props.investmentsData.noTransactions = (props.investmentsData.investments.length == 0);
    return cms(__filename)(
        <div className="Investments">
            <div className="row">
                <div className="col-sm-2 col-sm-offset-1">
                    <span className="SectionTitle">Your Investments</span>
                </div>
            </div>
            {(props.investmentsData.noTransactions || props.investmentsData.waitingForInvestment) &&
                <div className="row Message">
                    <div className="col-sm-2 col-sm-offset-1">
                        {props.investmentsData.noTransactions ?
                            "You have not yet invested".toString()
                            :
                            "We have not recieved your investment".toString()
                        }
                    </div>
                </div>
            }
            {props.investmentsData.investments.length > 0 &&
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1 Transactions">
                        <table>
                            <thead>
                                <tr>
                                    <td>Paid</td>
                                    <td>Source</td>
                                    <td>Reward</td>
                                    <td className="Status"> </td>
                                </tr>
                            </thead>
                            <tbody>
                                {props.investmentsData.investments.map((row) =>
                                    <tr>
                                        <td>{row.paid.toString()}</td>
                                        <td>{row.source.toString()}</td>
                                        <td>{row.reward.toString()}</td>
                                        {
                                            row.success ?
                                                <td className="Success">success</td>
                                                :
                                                <td className="Progress">...in progress</td>
                                        }
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    )
};