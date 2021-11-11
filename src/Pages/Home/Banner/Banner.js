import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner-section">
            <div className="container mx-auto banner-row flex">
                <div className="banner-content w-1/2">
                    <h1 className="text-4xl font-bold">
                        HOOG<span className="highlight">TECH</span>™<br />
                        THE <span className="highlight">NO.1</span><br />
                        <span className="font-medium">IN THE NETHERLANDS</span>
                    </h1>
                </div>
                <div className="banner-slider w-1/2"></div>
            </div >
        </div >
    );
};

export default Banner;