import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default ({progress}) => {
    return (
        <LinearProgress mode="determinate" value={progress} style={{
            position:"absolute",
            left:0,
            right:0
        }}/>
    )
};
