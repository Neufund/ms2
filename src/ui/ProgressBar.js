import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default ({progress}) => {
    let style = {margin: "2vh 0 2vh -10vw", width: "100vw"};
    return (
        <LinearProgress mode="determinate" value={progress} style={style}/>
    )
};
