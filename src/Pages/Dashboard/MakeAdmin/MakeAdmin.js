import React from 'react';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { token } = useAuth();
    console.log(token);
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://safe-wildwood-94267.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Admin Creation Successful");
                }
            })
        e.preventDefault();
    }
    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col" >
            <div className="py-28 container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                    <h1 className="mb-2 text-3xl font-bold text-center">Make Admin</h1>
                    <form onSubmit={handleAdminSubmit}>
                        <input
                            type="email"
                            className="block text-md border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            onBlur={handleOnBlur} />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded primary-bg text-white hover:bg-green-dark focus:outline-none my-1"
                        >Make Admin</button>

                    </form>

                </div>

            </div>
        </div >
    );
};

export default MakeAdmin;