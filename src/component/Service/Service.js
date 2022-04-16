import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, img, description, price } = props.service
    return (
        <div className='service-details'>
            <h2>{name}</h2>
            <h4>price:{price}</h4>
        </div>
    );
};

export default Service;