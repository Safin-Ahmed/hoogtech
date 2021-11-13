import React from 'react';
import Rating from 'react-rating';
const SVGIcon = (props) =>
    <svg className={props.className} pointerEvents="none">
        <use xlinkHref={props.href} />
    </svg>;
const Review = ({ review }) => {
    const { userName, rating, description } = review;
    return (
        <div className="rounded-xl product-card p-10 shadow-xl text-center  transition duration-150 ease-in-out transform hover:-translate-y-8 bg-white">
            <h2 className="text-2xl font-bold mt-5 mb-1">{userName}</h2>
            <h5 className="highlight font-bold text-md mb-2">Customer</h5>
            <Rating
                initialRating={rating}
                readonly
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                style={{ color: 'gold', fontSize: '14px' }}
            />
            <p className="px-10 mt-3 mb-3">{description}</p>

        </div>
    );
};

export default Review;