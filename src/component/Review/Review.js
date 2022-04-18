import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, img, description } = props.review
    return (
        <div className='review-details'>
            <h2>Review:{name}</h2>
        </div>
    );
};

export default Review;