import React from 'react';
import './Investments.scss';
import cms from '../../cms';

export default class Investments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: this.computeMsg(props.investmentsData.icoState),
            investments: props.investmentsData.investments
        };
        console.log("constructor");
        console.log(this.state);
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps");
        console.log(nextProps);
        this.setState({
            msg: this.computeMsg(nextProps.investmentsData.icoState),
            investments: nextProps.investmentsData.investments
        });
    }

    computeMsg = (icoState) => {
        let msg;
        if (!(icoState == "progress" || icoState == "success")) {
            if (icoState == "thankyou") {
                msg = "We have not recieved your investment";
            } else {
                msg = "You have not yet invested";
            }
        }
        return msg;
    };

    render() {
        console.log("render");
        console.log(this.state);
        return cms(__filename)(
            <div className="Investments Section">
                <div className="row">
                    <div className="col-sm-2 col-sm-offset-1">
                        <span className="SectionTitle">Your Investments</span>
                    </div>
                </div>
                {(this.state.msg != undefined) &&
                <div className="row Message">
                    <div className="col-sm-4 col-sm-offset-1">
                        {this.state.msg}
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
                                        row.success ?
                                            <td className="Status Success">success</td>
                                            :
                                            <td className="Status Progress">...in progress</td>
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