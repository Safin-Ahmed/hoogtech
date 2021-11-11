import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Features></Features>
            <Footer></Footer>
        </div>
    );
};

export default Home;