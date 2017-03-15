import React from 'react';
import ProgressBar from '../ui/ProgressBar';
import Headline from '../ui/Headline';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import StepperWrapper from '../ui/StepperWrapper';
import {countries} from 'country-data';
import './KYC.css';

export default () => {
    let styles = {
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
    return (
        <div className="KYC">
            <Headline text="Welcome Mr Investor"/>
            <div className="secondary-info">To invest in NEUFUND please follow this steps</div>
            <ProgressBar progress={40}/>
            <div className="row">
                <div className="col-sm-4">
                    <StepperWrapper step={1} />
                </div>
                <div className="col-sm-8">
                    <div className="KYC-form">
                        <h4>Identification</h4>
                        <div className="secondary-info">
                            In order to identify you please upload
                            a photo of your ID card or Passport:
                        </div>
                        <SelectField floatingLabelText="Country"
                                     autoWidth={true}
                                     maxHeight={200}
                                     style={styles.root}
                                     inputStyle={styles.input}
                                     floatingLabelStyle={styles.label}>
                            {countries.all.map(country => {
                                return <MenuItem key={country.name}
                                                 value={country.name}
                                                 primaryText={country.name}/>
                            })}
                        </SelectField>
                        <TextField floatingLabelText="Address line 1"
                                   style={styles.root}
                                   inputStyle={styles.input}
                                   floatingLabelStyle={styles.label}/>
                        <TextField floatingLabelText="Zip code"
                                   style={styles.root}
                                   inputStyle={styles.input}
                                   floatingLabelStyle={styles.label}/>
                        <TextField floatingLabelText="City"
                                   style={styles.root}
                                   inputStyle={styles.input}
                                   floatingLabelStyle={styles.label}/>
                        <Checkbox label="I represent myself"/>
                        <RaisedButton label="Submit"/>
                    </div>
                </div>
            </div>
        </div>
    )
};
