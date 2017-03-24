import React from 'react';
import cms from '../cms';
import CircularProgress from 'material-ui/CircularProgress';

const SECONDS = 15;

class LedgerCountdown extends React.Component {
    constructor() {
        super();
        this.state = {timeLeft: SECONDS};
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        this.reset();
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    reset() {
        this.setState({timeLeft: SECONDS});
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(this.tick.bind(this), 1000);
    }

    tick() {
        if (this.state.timeLeft === 1) {
            clearInterval(this.intervalId);
        }
        this.setState({timeLeft: this.state.timeLeft - 1});
    }

    render() {
        return cms(__filename)(
            <div className="LedgerCountdown">
                {this.state.timeLeft
                    ? <div>
                        <div>{`You have ${this.state.timeLeft} seconds left`}</div>
                        <CircularProgress
                            mode="determinate"
                            max={SECONDS}
                            value={this.state.timeLeft}/>
                    </div>
                    : "Time's up if the transaction is still on the screen - please cancel it. Otherwise reconnect your nano"}
            </div>
        )
    }
}

export default LedgerCountdown;