import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useProducts from '../../../hooks/useProducts';

const Purchase = () => {
    const { id } = useParams();
    const { products } = useProducts();
    const { user, isLoaded } = useAuth();
    const { displayName, email } = user;
    const [orderInfo, setOrderInfo] = useState({});
    const history = useHistory();
    if (!products.length) {
        return <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
    }
    const product = products.find(pd => pd._id == id);
    const { imgUrl, productName, price, desc } = product;
    const handleSubmit = e => {
        const order = { ...orderInfo, productName, price };
        order["cus_name"] = displayName;
        order["cus_email"] = email;
        order["status"] = "pending";
        fetch('https://safe-wildwood-94267.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Have Been Recieved');
                    history.push('/');
                }
            })
        e.preventDefault();
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newOrderInfo = { ...orderInfo };
        newOrderInfo[field] = value;
        setOrderInfo(newOrderInfo);
    }
    return (
        <div className="purchase-page">
            <div className="container py-10 flex flex-col-reverse md:flex-row flex-wrap mx-auto items-center">
                <div className="purchase-form w-full md:w-1/2">
                    <form onSubmit={handleSubmit} className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                        <p className="text-gray-800 font-medium">Customer information</p>
                        <div className="">
                            <label className="block text-sm text-gray-00" for="cus_name">Name</label>
                            <input className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" defaultValue={displayName} onBlur={handleOnBlur} placeholder="Your Name" aria-label="Name" />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600" for="cus_email">Email</label>
                            <input disabled className="w-full px-5  py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder={email} aria-label="Email" />
                        </div>
                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600" for="cus_address">Address</label>
                            <input onBlur={handleOnBlur} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_address" type="text" required="" placeholder="Street" aria-label="Email" />
                        </div>
                        <div className="mt-2">
                            <label className="hidden text-sm block text-gray-600" for="cus_email">City</label>
                            <input onBlur={handleOnBlur} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_city" name="cus_city" type="text" required="" placeholder="City" aria-label="Email" />
                        </div>
                        <div className="inline-block mt-2 w-1/2 pr-1">
                            <label className="hidden block text-sm text-gray-600" for="cus_country">Country</label>
                            <input onBlur={handleOnBlur} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_country" type="text" required="" placeholder="Country" aria-label="Email" />
                        </div>
                        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                            <label className="hidden block text-sm text-gray-600" for="cus_zip">Zip</label>
                            <input onBlur={handleOnBlur} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_zip" type="text" required="" placeholder="Zip" aria-label="Email" />
                        </div>
                        <div className="mt-4">
                            <button className="px-4 py-1 text-white font-light tracking-wider primary-bg rounded" type="submit">Place Order</button>
                        </div>
                    </form>
                </div>
                <div className="product-detail w-full md:w-1/2">
                    <div class="py-6">
                        <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                            <div class="w-1/3 bg-cover" style={{ backgroundImage: `url(${imgUrl})` }}>
                            </div>
                            <div class="w-2/3 p-4">
                                <h1 class="text-gray-900 font-bold text-2xl">{productName}</h1>
                                <p class="mt-2 text-gray-600 text-sm">{desc}</p>
                                <div class="flex item-center justify-between mt-3">
                                    <h1 class="text-gray-700 font-bold text-xl">${price}</h1>
                                    <button onClick={() => {
                                        history.push('/');
                                    }} class="px-3 py-2 bg-red-500 text-white text-xs font-bold uppercase rounded">Return</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Purchase;