import React from 'react';
import Rating from 'react-rating';
const SVGIcon = (props) =>
    <svg className={props.className} pointerEvents="none">
        <use xlinkHref={props.href} />
    </svg>;
const Review = () => {
    return (
        <div className="rounded-xl product-card p-10 shadow-xl text-center  transition duration-150 ease-in-out transform hover:-translate-y-8 bg-white">
            <h2 className="text-2xl font-bold mt-5 mb-1">Copper #1</h2>
            <h5 className="highlight font-bold text-md mb-2">Customer</h5>
            <Rating
                initialRating={2.5}
                readonly
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                style={{ color: 'gold', fontSize: '14px' }}
            />
            <p className="px-10 mt-3 mb-3">The package has arrived in good condition. i took it a second time and i am still satisfied. i advise everyone.</p>

        </div>
    );
};

export default Review;