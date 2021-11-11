import React from 'react';
import './Banner.css';
import product1 from '../../../images/slide-1.png';
const Banner = () => {
    return (
        <div className="banner-section pt-20 pb-5">
            <div className="container mx-auto banner-row flex items-center">
                <div className="banner-content w-1/2">
                    <h1 className="text-6xl font-bold">
                        HOOG<span className="highlight">TECH</span>™<br />
                        THE <span className="highlight">NO.1</span><br />
                        <span className="font-medium text-4xl">IN THE NETHERLANDS</span>
                    </h1>
                    <p className="text-lg w-2/3 mt-5 mb-14">At HoogTech™ we put you first. Our products are of  high quality and made of robust materials. You have always had a cancellation period of 30 days for all your purchases.</p>
                    <button className="primary-bg rounded px-7 py-2 border-2 text-white">Learn More</button>
                    <button className="border-2 border-black rounded px-7 ml-5 py-2">Discover Us</button>
                </div>
                <div className="banner-slider w-1/2">
                    <div className="product-box shadow-lg p-10 rounded-lg">
                        <img style={{ width: '404px', height: '404px', margin: 'auto' }} src={product1} alt="" />
                        <p className="text-gray-400 text-center">HIGHWATCH 7 - <span className="text-blue-500">$200</span></p>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Banner;