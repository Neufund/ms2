import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default ({progress}) => {
    return (
        <LinearProgress mode="determinate" value={progress}/>
    )
};
