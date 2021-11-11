import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner-section">
            <div className="container mx-auto banner-row flex">
                <div className="banner-content w-1/2">
                    <h1 className="text-6xl font-bold">
                        HOOG<span className="highlight">TECH</span>™<br />
                        THE <span className="highlight">NO.1</span><br />
                        <span className="font-medium text-4xl">IN THE NETHERLANDS</span>
                    </h1>
                    <p className="text-lg w-2/3 mt-5 mb-14">At HoogTech™ we put you first. Our products are of  high quality and made of robust materials. You have always had a cancellation period of 30 days for all your purchases.</p>
                    <button className="bg-green-500	rounded px-5 py-2 border-2 border-green-500 text-white">Learn More</button>
                    <button className="border-2 border-black rounded px-5 ml-5 py-2">Discover Us</button>
                </div>
                <div className="banner-slider w-1/2"></div>
            </div >
        </div >
    );
};

export default Banner;