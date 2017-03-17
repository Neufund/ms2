import React from 'react';
import cms from '../cms';

let NotFound = () => {
    return cms(__filename)(
        <div className="NotFound">
            NotFound
        </div>
    )
};

export default NotFound;
