import React from 'react';
import { Link } from 'react-router-dom';

const HomeProduct = ({ product }) => {
    const { imgUrl, productName, desc, price, _id } = product;
    return (
        <div className="rounded-xl product-card p-10 shadow-xl text-center  transition duration-150 ease-in-out transform hover:-translate-y-8">
            <img className="mx-auto" src={imgUrl} />
            <h2 className="text-2xl font-bold mt-5">{productName}</h2>
            <p className="px-10 mt-3 mb-3">{desc}</p>
            <h5 className="highlight font-bold text-2xl">${price}</h5>
            <button className="transition duration-150 ease-in-out rounded-lg hover:bg-black primary-bg text-xl text-white px-8 py-3 mt-4"><Link to={`/purchase/${_id}`}>Purchase Now</Link></button>
        </div>
    );
};

export default HomeProduct;