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
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>price:${price}</h5>
            <p><small>{description}</small></p> <button className='service-btn ' onClick={() => handleService(id)}>Details</button>
        </div>
    );
};

export default Service;