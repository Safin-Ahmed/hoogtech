import React from 'react';
import useProducts from '../../../hooks/useProducts';
import HomeProduct from '../../Home/HomeProduct/HomeProduct';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Explore = () => {
    const { products } = useProducts();
    return (
        <div className="home-products-section">
            <Navbar></Navbar>
            <div className="container mx-auto py-14">
                <h2 className="text-5xl font-bold text-center mb-12">Explore <span className="highlight">Products</span></h2>
                <div className="products-container grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        products.map(product => <HomeProduct id={product._id} product={product}></HomeProduct>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;