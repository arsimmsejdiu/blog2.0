import React from 'react';
import NotFound from '../Images/error-404.png';

const PageNotFound = () => {
    return (
        <div className="not-found">
            <img src={NotFound} alt={NotFound} />
        </div>
    )
}

export default PageNotFound;