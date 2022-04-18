import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div id='reviews '>
            <h2 style={{ color: 'purple' }} className='mt-5 mb-5 text-center '>Customer Feedback</h2>
            <div className='review container'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    >

                    </Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;