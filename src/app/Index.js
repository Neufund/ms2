import React from 'react';
import './Index.css';
import Headline from '../ui/Headline';
import RaisedButton from 'material-ui/RaisedButton';

export default () => {
    return (
        <div className="Index">
            <div className="pure-g">
                <Headline text="Welcome to the Presale"/>
                <div className="pure-u-1 pure-u-md-1-3">
                    <RaisedButton label="Default"/>
                </div>
            </div>
        </div>
    )
};
