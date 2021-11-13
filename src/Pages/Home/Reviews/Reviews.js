import React, { useEffect } from 'react';
import { useState } from 'react';
import Review from '../Review/Review';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://safe-wildwood-94267.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="reviews-section bg-black py-10">
            <div className="container mx-auto">
                <div className="reviews-container flex flex-wrap">
                    <div className="reviews-title w-full md:w-1/4">
                        <h2 className="hidden md:block leading-loose text-center md:text-left text-5xl font-bold italic text-white">What<br />
                            People Are<br />
                            Saying<br />
                            About Us
                        </h2>
                        <h2 className="md:hidden leading-loose text-center md:text-left text-4xl mb-10 font-bold italic text-white">
                            What People Are Saying About Us
                        </h2>
                    </div>
                    <div className="reviews-cards px-5 md:px-0 grid gap-4 grid-cols-1 md:grid-cols-3 w-full md:w-3/4">
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