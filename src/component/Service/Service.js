import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, img, description, price } = props.service
    const navigate = useNavigate()

    const handleService = () => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='service-details'>
            <h2>{name}</h2>
            <h4>price:{price}</h4>
            <button onClick={() => handleService(id)}>Details</button>
        </div>
    );
};

export default Service;