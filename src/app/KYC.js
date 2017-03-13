import React from 'react';
import Stepper from '../ui/Stepper';
import Headline from '../ui/Headline';
import Step from '../ui/Step';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {countries} from 'country-data';
import './KYC.css';

export default () => {
    return (
        <div className="KYC">
            <Headline text="Welcome Mr Investor"/>
            <div className="KYC-description">To invest in NEUFUND please follow the steps</div>
            <Stepper progress="40"/>
            <div className="KYC-content">
                <div className="column leftColumn">
                    <div className="KYC-progress">
                        <Step>Sign your Limited Partner Agreement</Step>
                        <Step>Identification</Step>
                        <Step>Bank transfer</Step>
                    </div>
                </div>
                <div className="column rightColumn">
                    <div className="KYC-form">
                        <h4>Identification</h4>
                        <div className="secondary-info">
                            In order to identify you please upload
                            a photo of your ID card or Passport:
                        </div>
                        <SelectField floatingLabelText="Country"
                                     autoWidth={true}
                                     maxHeight={200}>
                            {countries.all.map(country => {
                                return <MenuItem key={country.name}
                                                 value={country.name}
                                                 primaryText={country.emoji + " " + country.name}/>
                            })}
                        </SelectField>
                        <TextField floatingLabelText="Address line 1"/>
                        <TextField floatingLabelText="Zip code"/>
                        <TextField floatingLabelText="City"/>
                        <Checkbox label="I represent myself"/>
                    </div>
                </div>
            </div>
        </div>
    )
};
