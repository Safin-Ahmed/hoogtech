import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Review from '../Review/Review';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="reviews-section bg-black py-10">
            <div className="container mx-auto">
                <div className="reviews-container flex">
                    <div className="reviews-title w-1/4">
                        <h2 className="leading-loose text-5xl font-bold italic text-white">What<br />
                            People Are<br />
                            Saying<br />
                            About Us</h2>
                    </div>
                    <div className="reviews-cards grid gap-4 grid-cols-3 w-3/4">
                        {
                            reviews.map(review => <Review review={review} id={review._id}></Review>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;