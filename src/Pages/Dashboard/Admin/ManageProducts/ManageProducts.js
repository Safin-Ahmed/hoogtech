import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const { products, setProducts, isLoaded } = useProducts();
    if (isLoaded) {
        return "Loading"
    }
    return (
        <div className="manage-products-section">
            <div className="py-6">
                {
                    products.map(product => <ManageProduct id={product._id} product={product} setProducts={setProducts}></ManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;