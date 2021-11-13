import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    return (
        <div className="reviews-section bg-black py-10">
            <div className="container mx-auto">
                <div className="reviews-container flex">
                    <div className="reviews-title w-1/4">
                        <h2 className="text-3xl font-bold italic text-white">What<br />
                            People Are<br />
                            Saying<br />
                            About Us</h2>
                    </div>
                    <div className="reviews-cards w-3/4">
                        <Review></Review>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;