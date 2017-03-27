import React from 'react';
import './AccountDetails.scss';
import cms from '../../cms';

import ReactTooltip from 'react-tooltip'
import RaisedButton from 'material-ui/RaisedButton';

import CopyToClipboard from 'react-copy-to-clipboard';

export default class AccountDetails extends React.Component {
    constructor(props) {
        super(props);
        this.account = props.account;
        this.state = {
            icoState: props.icoState
        };
    }

    componentDidMount() {
        ReactTooltip.show(this.refs.reference);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            icoState: nextProps.icoState
        });
    }

    render() {
        return cms(__filename)(
            <div className="BankAccount Section">
                <div className="row">
                    <div className="col-sm-9 col-sm-offset-2">

                        <div className="row">
                            <div className="col-sm-2">
                                Beneficiary
                            </div>
                            <div className="col-sm-4 bold">
                                {this.account.beneficiary}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-2">
                                IBAN
                            </div>
                            <div className="col-sm-4 bold">
                                {this.account.iban}
                                <CopyToClipboard text={this.account.iban}>
                                    <i className="material-icons">content_copy</i>
                                </CopyToClipboard>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-2">
                                BIC
                            </div>
                            <div className="col-sm-4 bold">
                                {this.account.bic}
                                <CopyToClipboard text={this.account.bic}>
                                    <i className="material-icons">content_copy</i>
                                </CopyToClipboard>
                            </div>
                        </div>

                        <div className="row ReferenceWrapper">
                            <div className="col-sm-4 Reference" ref='reference' data-tip="hello world"
                                 data-for="bank-account-tooltip">
                                <div className="row">
                                    <div className="col-sm-12 Reference">
                                        Copy this to your transfer reference:
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 Reference bold">
                                        Reference
                                    </div>
                                    <div className="col-sm-6 Reference bold">
                                        {this.account.reference}
                                        <CopyToClipboard text={this.account.reference}>
                                            <i className="material-icons">content_copy</i>
                                        </CopyToClipboard>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ReactTooltip id="bank-account-tooltip"
                                      place="right"
                                      effect="solid"
                                      class="ICO-tooltip"
                                      afterHide={() => ReactTooltip.show(this.refs.reference)}>
                            <div>Important!</div>
                            <div>Please do not forget to<br/>include the complete<br/>reference code.</div>
                        </ReactTooltip>

                        <div className="row">
                            <div className="col-sm-2">
                                You agreed to buy
                            </div>
                            <div className="col-sm-4 bold">
                                NM {this.account.NUE.toString()} + {this.account.bonus.toString()}% bonus
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-2">
                                for
                            </div>
                            <div className="col-sm-4 bold">
                                &#8364; {this.account.EUR.toString()}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-8 Fees">
                                Standard bank fees apply
                            </div>
                        </div>
                        {
                            this.state.icoState !== "ico" ?
                                <div className="row buttonSection">
                                    <div className="col-sm-2">
                                        <RaisedButton label="I did it again"/>
                                    </div>
                                    <div className="col-sm-8">
                                        <h3>Thank you!</h3>
                                        <h4>We are waiting to recieve your transfer, it might take a while</h4>
                                        <p>We will send you a reminder to your email address when the transaction is
                                            completed</p>

                                        <div className="Email">
                                            <b>e-mail@address.com</b> <span className="ChangeButton"
                                                                            onClick={() => alert("e-mail change to implement")}>X</span>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="row buttonSection">
                                    <div className="col-sm-2">
                                        <RaisedButton label="I did it"
                                                      onClick={() => this.props.setIcoState("thankyou")}/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
};