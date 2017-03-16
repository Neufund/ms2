import React from 'react';
import ProgressBar from '../ui/ProgressBar';
import Headline from '../ui/Headline';
import StepperWrapper from '../ui/StepperWrapper';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import {countries} from 'country-data';
import './KYC.scss';

export default class KYC extends React.Component {

    constructor() {
        super();

        /**
         *  waiting - request was sent to server and waiting for response
         *  success - got data from server
         *  empty - we don't have data?
         * @type {{state: string}}
         */
        this.state = {getInvestorDataState: "waiting", idDialogOpen: false};

        this.investorData = {
            idImage: 'http://placehold.it/900x400?text=investor+Id+placeholder+image',
            country: 'Poland',
            address: 'Gornoslaska 1',
            zip: '00-443',
            city: 'Warsaw'
        };

        this.styles = {
            root: {
                height: "50px"
            },
            input: {
                marginTop: 0
            },
            label: {
                top: "20px"
            }
        };
    }

    componentDidMount() {
        window.setTimeout(() => this.setState({getInvestorDataState: "success"}), 4000);
    }

    handleOpen = () => {
        this.setState({idDialogOpen: true});
    };

    handleClose = () => {
        this.setState({idDialogOpen: false});
    };

    waiting = () =>
        <div className="progressWrapper">
            <p>Getting your data</p>
            <CircularProgress size={80} thickness={5}/>
        </div>;

    kycform = () =>
        <div className="KYC-form">
            <h4>Identification</h4>
            <div className="secondary-info">
                In order to identify you please upload
                a photo of your ID card or Passport:
            </div>
            <SelectField floatingLabelText="Country"
                         autoWidth={true}
                         maxHeight={200}
                         style={this.styles.root}
                         inputStyle={this.styles.input}
                         floatingLabelStyle={this.styles.label}>
                {countries.all.map(country => {
                    return <MenuItem key={country.name}
                                     value={country.name}
                                     primaryText={country.name}/>
                })}
            </SelectField>
            <TextField floatingLabelText="Address line 1"
                       style={this.styles.root}
                       inputStyle={this.styles.input}
                       floatingLabelStyle={this.styles.label}/>
            <TextField floatingLabelText="Zip code"
                       style={this.styles.root}
                       inputStyle={this.styles.input}
                       floatingLabelStyle={this.styles.label}/>
            <TextField floatingLabelText="City"
                       style={this.styles.root}
                       inputStyle={this.styles.input}
                       floatingLabelStyle={this.styles.label}/>
            <Checkbox className="checkbox" label="I represent myself"/>
            <RaisedButton className="submitButton" label="Submit"/>
        </div>;

    confirmation = () =>
        <div className="KYC-form">
            <h4>Confirmation</h4>
            <div className="secondary-info">
                Please confirm your data
            </div>
            <img onClick={this.handleOpen} className="investorId" src={this.investorData.idImage} alt="investor Id"/>
            <Dialog
                modal={false}
                open={this.state.idDialogOpen}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}>
                <img src={this.investorData.idImage} alt="investor Id" style={{"max-width": "100%"}}/>
            </Dialog>
            <SelectField autoWidth={true}
                         maxHeight={200}
                         style={this.styles.root}
                         inputStyle={this.styles.input}
                         floatingLabelStyle={this.styles.label}
                         disabled={true}
                         value={this.investorData.country}>
                {countries.all.map(country => {
                    return <MenuItem key={country.name}
                                     value={country.name}
                                     primaryText={country.name}/>
                })}
            </SelectField>
            <TextField style={this.styles.root}
                       inputStyle={this.styles.input}
                       floatingLabelStyle={this.styles.label}
                       disabled={true}
                       value={this.investorData.address}/>
            <TextField style={this.styles.root}
                       inputStyle={this.styles.input}
                       floatingLabelStyle={this.styles.label}
                       disabled={true}
                       value={this.investorData.zip}/>
            <TextField style={this.styles.root}
                       inputStyle={this.styles.input}
                       floatingLabelStyle={this.styles.label}
                       disabled={true}
                       value={this.investorData.city}/>
            <RaisedButton className="submitButton" label="I hereby confirm its my data"/>
        </div>;

    render() {
        let section;
        if(this.state.getInvestorDataState == "waiting") {
            section = this.waiting();
        } else {
            section = this.confirmation();
        }

        return (
            <div className="KYC">
                <Headline text="Welcome Mr Investor"/>
                <div className="secondary-info">To invest in NEUFUND please follow this steps</div>
                <ProgressBar progress={40}/>
                <div className="row">
                    <div className="col-sm-4">
                        <StepperWrapper step={1}/>
                    </div>
                    <div className="col-sm-8">
                        {section}
                    </div>
                </div>
            </div>
        )
    }
};
