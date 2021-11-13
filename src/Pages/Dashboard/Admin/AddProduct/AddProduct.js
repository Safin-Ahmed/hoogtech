import React, { useRef } from 'react';
import useAuth from '../../../../hooks/useAuth';
const AddProduct = () => {
    const { token } = useAuth();
    const productNameRef = useRef();
    const imgUrlRef = useRef();
    const priceRef = useRef();
    const productDescRef = useRef();

    const handleProductSubmit = e => {
        const productName = productNameRef.current.value;
        const imgUrl = imgUrlRef.current.value;
        const price = priceRef.current.value;
        const productDesc = productDescRef.current.value;
        const newProduct = {
            imgUrl,
            productName,
            desc: productDesc,
            price
        }
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Product Added Successfully");
                    productNameRef.current.value = '';
                    imgUrlRef.current.value = '';
                    productDescRef.current.value = '';
                    priceRef.current.value = '';
                }
            })
        e.preventDefault();
    }
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="py-28 container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                    <h1 className="mb-2 text-3xl font-bold text-center">Add a Product</h1>
                    <p className="text-center text-sm mb-8"><small>Please Add a Product By Providing The Details Below</small></p>
                    <form onSubmit={handleProductSubmit}>
                        <input
                            type="text"
                            className="block text-md border border-grey-light w-full p-3 rounded mb-4"
                            name="ProductName"
                            placeholder="Product Name"
                            ref={productNameRef} />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="imgUrl"
                            placeholder="Product Image"
                            ref={imgUrlRef} />

                        <input
                            type="number"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="price"
                            placeholder="Product Price"
                            ref={priceRef} />

                        <textarea
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="productDescription"
                            placeholder="Product Description"
                            ref={productDescRef} />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded primary-bg text-white hover:bg-green-dark focus:outline-none my-1"
                        >Add Product</button>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default AddProduct;