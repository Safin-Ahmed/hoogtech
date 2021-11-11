import React, { useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import HomeProduct from '../HomeProduct/HomeProduct';

const HomeProducts = () => {
    const { products } = useProducts();
    const slicedProducts = products.slice(0, 6);
    return (
        <div className="home-products-section py-14">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center mb-12">Trending <span className="highlight">Products</span></h2>
                <div className="products-container gap-x-7 flex flex-wrap gap-y-20">
                    {
                        slicedProducts.map(product => <HomeProduct id={product.id} product={product}></HomeProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;