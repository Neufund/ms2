import React from 'react';
import './CurrencySwitcher.scss';
import cms from '../../cms';

export default class CurrencySwitcher extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            EUR: props.currency == "EUR"
        }
    }

    handleClickCurrency = (isEur) => {
        this.setState({EUR: isEur});
    };

    render() {
        return cms(__filename)(
            <div className="CurrencySwitcher Section">
                <div className="row">
                    <div className="col-sm-1 col-sm-offset-1">
                        <span className="SectionTitle">Transfer</span>
                    </div>
                </div>
                {this.props.showCurrencySwitcher &&
                <div className="row">
                    <div className="col-sm-2 col-sm-offset-1 Currencies">
                        <span
                            className={this.state.EUR && "active"}
                            onClick={() => {
                                this.handleClickCurrency(true)
                            }}>EUR </span>
                        |
                        <span
                            className={!this.state.EUR && "active"}
                            onClick={() => {
                                this.handleClickCurrency(false)
                            }}> ETH</span>
                    </div>
                </div>
                }
            </div>
        )
    }
};