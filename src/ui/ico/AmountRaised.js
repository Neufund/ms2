import React from 'react';
import './AmountRaised.scss';
import cms from '../../cms';

export default class AmountRaised extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            icoState: props.amountRaisedData.icoState,
            EUR: props.amountRaisedData.EUR,
            ETH: props.amountRaisedData.ETH,
            CAP: props.amountRaisedData.CAP
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            icoState: nextProps.amountRaisedData.icoState,
            EUR: nextProps.amountRaisedData.EUR,
            ETH: nextProps.amountRaisedData.ETH,
            CAP: nextProps.amountRaisedData.CAP
        });
    }

    render() {
        return cms(__filename)(
            <div className="AmountRaised">
                <div className="row">
                    <div className="col-sm-1 col-sm-offset-1">
                        Amount raised:
                    </div>
                    {
                        (this.state.icoState != "fail") &&
                        <div className="col-sm-3">
                            <span className="Unit">EUR</span> <span
                            className={(this.state.icoState == "success") ? "Number" : "Number Big"}>{this.state.EUR}</span>
                        </div>
                    }
                    {
                        (this.state.icoState != "fail") &&
                        <div className="col-sm-2">
                            <span className="Unit">ETH</span> <span
                            className={(this.state.icoState == "success") ? "Number" : "Number Big"}>{this.state.ETH}</span>
                        </div>
                    }
                    {
                        (this.state.icoState == "success" || this.state.icoState == "fail") &&
                        <div className="col-sm-2 Cap">
                            {this.state.CAP.toString()}% of cap
                        </div>
                    }
                </div>
            </div>
        )
    }
};