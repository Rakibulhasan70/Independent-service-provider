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
            <div className='ps-2 mb-2'>
                <h4 className='mt-3 '>{name}</h4>
                <h5>price:${price}</h5>
                <p><small>{description}</small></p> <button className='service-btn  ' onClick={() => handleService(id)}>Details</button>
            </div>
        </div>
    );
};

export default Service;