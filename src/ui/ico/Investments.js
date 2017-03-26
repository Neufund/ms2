import React from 'react';
import './Investments.scss';
import cms from '../../cms';

export default class Investments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            icoState: props.investmentsData.icoState,
            investments: props.investmentsData.investments
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            icoState: nextProps.investmentsData.icoState,
            investments: nextProps.investmentsData.investments
        });
    }

    computeMsg = (icoState) => {
        let msg;
        if (!(icoState == "progress" || icoState == "success" || icoState == "fail")) {
            if (icoState == "thankyou") {
                msg = "We have not recieved your investment";
            } else {
                msg = "You have not yet invested";
            }
        }
        return msg;
    };

    render() {
        return cms(__filename)(
            <div className="Investments Section">
                <div className="row">
                    <div className="col-sm-2 col-sm-offset-1">
                        <span className="SectionTitle">Your Investments</span>
                    </div>
                </div>
                {(this.computeMsg(this.state.icoState) != undefined) &&
                <div className="row Message">
                    <div className="col-sm-4 col-sm-offset-1">
                        {this.computeMsg(this.state.icoState)}
                    </div>
                </div>
                }
                {this.state.investments.length > 0 &&
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1 Transactions">
                        <table>
                            <thead>
                            <tr>
                                <td>Paid</td>
                                <td>Source</td>
                                <td>Reward</td>
                                <td></td>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.investments.map((row) =>
                                <tr>
                                    <td>{row.paid.toString()}</td>
                                    <td>{row.source.toString()}</td>
                                    <td>{row.reward.toString()}</td>
                                    {
                                        this.state.icoState != "progress" ?
                                            <td className="Status Success">{row.status}</td>
                                            :
                                            <td className="Status Progress">{row.status}</td>
                                    }
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
                }
            </div>
        )
    }
};