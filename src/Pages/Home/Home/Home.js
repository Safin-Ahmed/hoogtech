import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Reviews></Reviews>
            <Features></Features>
            <Footer></Footer>
        </div>
    );
};

export default Home;