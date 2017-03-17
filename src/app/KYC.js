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
import cms from '../cms';

export default class KYC extends React.Component {

    constructor() {
        super();
        let formState = {
            value: undefined,
            forbiddenCountry: false,
            missingCheckbox: true,
            canSubmit: false
        };

        /**
         *  waiting - request was sent to server and waiting for response
         *  success - got data from server
         *  empty - we don't have data?
         * @type {{state: string}}
         */
        this.state = {getInvestorDataState: "waiting", idDialogOpen: false, formState: formState};

        this.investorData = {
            idImage: 'http://placehold.it/900x400?text=investor+Id+placeholder+image',
            country: 'Poland',
            address: 'Gornoslaska 1',
            zip: '00-443',
            city: 'Warsaw'
        };
    }

    handleCountryListChange = (event, index, value) => {
        console.log(index);
        let formState = this.state.formState;
        formState.value = value;
        formState.forbiddenCountry = value == 'United States';
        this.setState({formState: formState});
        this.validate();
    };

    handleCheckboxChange = (event, isInputChecked) => {
        let formState = this.state.formState;
        formState.missingCheckbox = !isInputChecked;
        this.setState({formState: formState});
        this.validate();
    };

    validate = () => {
        let formState = this.state.formState;
        formState.canSubmit = !formState.forbiddenCountry && !formState.missingCheckbox && formState.value != undefined;
        this.setState({formState: formState});
    };

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

    kycform = () => {
        let countryListprops = {
            floatingLabelText: "Country",
            autoWidth: true,
            maxHeight: 200,
            value: this.state.formState.value,
            onChange: this.handleCountryListChange
        };

        if (this.state.formState.forbiddenCountry) {
            countryListprops.errorText = "Sorry no US citizens";
        }

        let countryList =
            <SelectField{...countryListprops}>
                {countries.all
                    .filter(country => country.status == 'assigned')
                    .sort((a, b) => a.name >= b.name)
                    .map(country => {
                        return <MenuItem key={country.name}
                                         value={country.name}
                                         primaryText={country.name}/>
                    })}
            </SelectField>;

        return <div className="KYC-form">
            <h4>Identification</h4>
            <div className="secondary-info">
                In order to identify you please upload
                a photo of your ID card or Passport:
            </div>
            {countryList} <br />
            <TextField floatingLabelText="Address line 1"/> <br />
            <TextField floatingLabelText="Zip code"/> <br />
            <TextField floatingLabelText="City"/>
            <Checkbox onCheck={this.handleCheckboxChange} className="checkbox" label="I represent myself"/>
            <RaisedButton disabled={!this.state.formState.canSubmit} className="submitButton" label="Submit"/>
        </div>;
    };

    confirmation = () =>
        <div className="KYC-form">
            <h4>Confirmation</h4>
            <div className="secondary-info">
                Please confirm your data
            </div>
            <img onClick={this.handleOpen} className="investorId" src={this.investorData.idImage} alt="investor Id"/>
            <br />
            <Dialog
                modal={false}
                open={this.state.idDialogOpen}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}>
                <img src={this.investorData.idImage} alt="investor Id" style={{"max-width": "100%"}}/>
            </Dialog>
            <TextField disabled={true} value={this.investorData.country}/> <br />
            <TextField disabled={true} value={this.investorData.address}/> <br />
            <TextField disabled={true} value={this.investorData.zip}/> <br />
            <TextField disabled={true} value={this.investorData.city}/> <br />
            <RaisedButton className="submitButton" label="I hereby confirm its my data"/>
        </div>;

    render() {
        let section;
        if (this.state.getInvestorDataState == "waiting") {
            section = this.waiting();
        } else {
            section = this.confirmation();
        }

        return cms(__filename)(
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
