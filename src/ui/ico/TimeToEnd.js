import React from 'react';
import './TimeToEnd.scss';
import cms from '../../cms';

import Timer from '../Timer'

export default class TimeToEnd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icoState: props.data.icoState
        };

        if (props.data.endTime != undefined)
            this.state.endTime = props.data.endTime;

        if (props.data.duration != undefined) {
            this.state.duration = props.data.duration;
            this.state.ethscanUrl = props.data.ethscanUrl;
            this.state.auditUrl = props.data.auditUrl;
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data.endTime != undefined) {
            this.setState({
                icoState: nextProps.data.icoState,
                endTime: nextProps.data.endTime
            });
        }
        if (nextProps.data.duration != undefined) {
            this.setState({
                icoState: nextProps.data.icoState,
                duration: nextProps.data.duration,
                ethscanUrl: nextProps.data.ethscanUrl,
                auditUrl: nextProps.data.auditUrl
            });
        }
    }

    render() {
        return cms(__filename)(
            <div className="TimeToEnd">
                <div className="row">
                    <div className="col-sm-1 col-sm-offset-1">
                        ICO finishes
                    </div>
                    {this.state.icoState == "success" || this.state.icoState == "fail" ?
                        <div className="col-sm-5">
                            <div className="icoDuration">
                                {this.state.icoState == "success" ?
                                    "FINALIZED IN 25MIN and 12 SECONDS"
                                    :
                                    "FINALIZED"
                                }
                                    </div>
                            <div className="links">
                                <a target="_blank" href={this.state.ethscanUrl}>Life on etherscan.io</a>
                                <a target="_blank" href={this.state.auditUrl}>Audit</a>
                            </div>
                        </div>
                        :
                        <div className="col-sm-5">
                            <Timer className="Timer" toTime={this.state.endTime}/>
                        </div>
                    }

                </div>
            </div>
        )
    }
};