import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, img, description } = props.review
    return (
        <div className='review-details'>
            <img src={img} alt="" />
            <div className='ps-2 mb-2'>
                <h4 className='mt-3'>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Review;