import React from 'react';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='ErrorPageContainer'>
            <div className='ErrorPage'>
                <h2 >404 - Page not found</h2>
                <p className='para'>Sorry, the content you were looking for cannot be found</p>
            </div>
        </div>
    );
};

export default ErrorPage;