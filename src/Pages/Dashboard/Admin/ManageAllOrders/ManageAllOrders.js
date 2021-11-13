import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../../../hooks/useAuth';
import MyOrder from '../../MyOrder/MyOrder';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageAllOrders = () => {
    const { token } = useAuth();
    const [manageOrders, setManageOrders] = useState([]);
    useEffect(() => {
        fetch(`https://safe-wildwood-94267.herokuapp.com/allOrders`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [token])
    console.log(manageOrders);
    return (
        <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Product
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                    </th>



                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {
                                    manageOrders.map(order => <ManageOrder token={token} order={order} setManageOrders={setManageOrders}></ManageOrder>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ManageAllOrders;