import React from 'react';
import ProgressBar from '../ui/ProgressBar';
import Headline from '../ui/Headline';
import StepperWrapper from '../ui/StepperWrapper';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Dropzone from 'react-dropzone';
import CircularProgress from 'material-ui/CircularProgress';
import {countries} from 'country-data';
import ReactTooltip from 'react-tooltip'
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
        this.state = {
            getInvestorDataState: "waiting",
            idDialogOpen: false,
            formState: formState,
            files: []
        };

        this.investorData = {
            idImage: 'http://placehold.it/900x400?text=investor+Id+placeholder+image',
            country: 'Poland',
            address: 'Gornoslaska 1',
            zip: '00-443',
            city: 'Warsaw'
        };
    }

    handleCountryListChange = (event, index, value) => {
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

    onDrop(acceptedFiles, rejectedFiles) {
        this.setState({files: acceptedFiles});
    };

    componentDidMount() {
        window.setTimeout(() => this.setState({getInvestorDataState: "success"}), 400);
    }

    componentDidUpdate() {
        ReactTooltip.show(this.dropzone);
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

        console.log(this.state.files.map((file) => <img src={file.preview} key={file.name}/>));
        return <div className="KYC-form">
            <h4>Upload a picture of your Passport of ID card</h4>
            <div ref={(dropzone) => {
                this.dropzone = dropzone;
            }} data-tip="React-tooltip">
                <Dropzone onDrop={this.onDrop.bind(this)}
                          multiple={false}
                          maxSize={5000000}
                          accept={"image/png,image/jpg"}
                          className="KYC-dropzone"
                          activeClassName="KYC-dropzone-active"
                          rejectClassName="KYC-dropzone-reject">

                    {this.state.files.length ?
                        <img className="KYC-image"
                             src={this.state.files[0].preview}
                             key={this.state.files[0].name}/>
                        : <div className="secondary-info">
                        Click or drop picture
                    </div>}
                </Dropzone>
            </div>
            <ReactTooltip place="right"
                          effect="solid"
                          class="KYC-tooltip"
                          afterHide={() => ReactTooltip.show(this.dropzone)}>
                <div className="KYC-tooltip-header">Important!</div>
                <div>Please upload readable picture <br/>of the document with data <br/>and your photo</div>
            </ReactTooltip>
            <h4>Fill in your real data</h4>
            {countryList} <br />
            <TextField floatingLabelText="Address line 1"/> <br />
            <TextField floatingLabelText="Zip code"/> <br />
            <TextField floatingLabelText="City"/>
            <Checkbox onCheck={this.handleCheckboxChange} className="checkbox" label="I represent myself"/>
            <RaisedButton disabled={!this.state.formState.canSubmit} className="submitButton" label="Submit"/>
        </div>;
    };

    render() {
        let section;
        if (this.state.getInvestorDataState == "waiting") {
            section = this.waiting();
        } else {
            section = this.kycform();
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
