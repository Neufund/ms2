import './ContractSign.scss';
import React from 'react';
import {Link, browserHistory} from 'react-router';
import {toPromise} from '../utils';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import {web3} from '../web3';
import RaisedButton from 'material-ui/RaisedButton';
import ContractPaper from '../images/contract_paper.png'
import ContractSmart from '../images/contract_smart.png'
import cms from '../cms';
import ledgerLoginProvider from '../ledgerLoginProvider';

export default class ContractSign extends React.Component {

    state = {
        open: false,
        waitForConfirmation: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    async handleSign(e) {
        e.preventDefault();
        ledgerLoginProvider.stop();
        this.setState({waitForConfirmation: true});
        let accounts = await toPromise(web3.eth.getAccounts);
        const tx = await toPromise(web3.eth.sendTransaction, {
            "from": accounts[0],
            "to": "0xb088a3Bc93F71b4DE97b9De773e9647645983688",
            "value": 1
        });
        ledgerLoginProvider.start();
        browserHistory.push("/kyc");
    };

    render() {
        const actions = [
            <IconButton tooltip="Download">
                <FontIcon className="material-icons">file_download</FontIcon>
            </IconButton>,
            <IconButton tooltip="Print">
                <FontIcon className="material-icons">print</FontIcon>
            </IconButton>,
        ];

        const signButton =
            <div className="SignButtonWrapper">
                <Link to="/kyc" onClick={this.handleSign.bind(this)}>
                    <RaisedButton label="Sign"/>
                </Link>
            </div>;

        const confirmMsg =
            <div className="ConfirmOnNano">
                <b>Confirm action with Ledger Nano</b><br />
                Press two keys on the device
            </div>;

        return cms(__filename)(
            <div className="ContractSign">
                <h4>Sign your Limited Partner Agreement</h4>
                <p>To see contracts click on the icons</p>
                <div className="Contracts row">
                    <div className="col-xs-12 col-sm-3" onClick={this.handleOpen}>
                        <div className="ContractWrapper">
                            <img className="Contract" src={ContractPaper} alt="paper contract code"/>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-1 ContractEquals">
                        <FontIcon className="material-icons">drag_handle</FontIcon>
                    </div>
                    <div className="col-xs-12 col-sm-3" onClick={this.handleOpen}>
                        <div className="ContractWrapper">
                            <img className="Contract" src={ContractSmart} alt="smart contract code"/>
                        </div>
                    </div>
                </div>
                <Dialog
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                    actions={actions}
                >
                    {this.contract}
                </Dialog>
                <div className="CheckboxWrapper">
                    <Checkbox label="I have read and understood the limited partner agreement"/>
                </div>

                {this.state.waitForConfirmation ? confirmMsg : signButton}


            </div>
        )
    }

    contract = <div>
        <h4>Lorem ipsum dolor sit amet</h4>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.</p>
        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
            delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
            praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
            delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
            praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    </div>;
};