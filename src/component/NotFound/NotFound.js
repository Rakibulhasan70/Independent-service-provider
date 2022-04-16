import React from 'react';
import NotFounds from '../../images/NotFound/error.webp'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container error'>
            <h2>Opps Sorry!! No data Found</h2>
            <img src={NotFounds} alt="" />
        </div>
    );
};

export default NotFound;