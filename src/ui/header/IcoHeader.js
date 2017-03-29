import React from 'react';
import './IcoHeader.scss';
import cms from '../../cms';

import ReactTooltip from 'react-tooltip'

export default class IcoHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        ReactTooltip.show(this.refs.userPanel);
    }

    render() {
        return cms(__filename)(
            <div className="row topArea icoHeader">
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <div className="stateChanger" onClick={() => this.props.setIcoState("kycprogress")}>kycprogress</div>
                    <div className="stateChanger" onClick={() => this.props.setIcoState("kycfail")}>kycfail</div>
                    <div className="stateChanger" onClick={() => this.props.setIcoState("preico")}>preico</div>
                    <div className="stateChanger" onClick={() => this.props.setIcoState("countdown")}>countdown</div>
                    <div className="stateChanger" onClick={() => this.props.setIcoState("ico")}>ico</div>
                    <div className="stateChanger" onClick={() => this.props.setIcoState("thankyou")}>thankyou</div>
                    <div className="stateChanger" onClick={() => this.props.setIcoState("progress")}>progress</div>
                    <div className="stateChanger" onClick={() => this.props.setIcoState("success")}>success</div>
                    <div className="stateChanger" onClick={() => this.props.setIcoState("fail")}>fail</div>

                    <div className="Header">
                        <div className="Logo"></div>
                        <div className="UserSection">
                            <div className="UserPanel"
                                 onClick={() => {
                                     alert("this will open LPA, KYC")
                                 }}
                                 ref='userPanel'
                                 data-tip="hello world"
                                 data-for="header-tooltip"
                            >
                                <i className="material-icons iconUser">account_circle</i>
                                <i className="material-icons iconArrow">details</i>
                            </div>
                            <ReactTooltip
                                id="header-tooltip"
                                place="bottom"
                                effect="solid"
                                class="UserPanel-tooltip"
                                afterHide={() => ReactTooltip.show(this.refs.userPanel)}>
                                <div>Here you can find<br/>your LPA and KYC</div>
                            </ReactTooltip>
                            <span className="Logout" onClick={() => {
                                alert("this will log you out")
                            }}>LOGOUT</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
