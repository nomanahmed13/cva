import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='nort_found'>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to={'/dashboard/home'}>go to home</Link>
        </div>
    );
};

export default NotFound;
