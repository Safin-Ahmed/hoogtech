import React, { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const userNameRef = useRef();
    const ratingRef = useRef();
    const descRef = useRef();

    const handleSubmit = e => {
        const userName = userNameRef.current.value;
        const rating = ratingRef.current.value;
        const description = descRef.current.value;

        const review = { userName, rating, description };

        fetch('https://safe-wildwood-94267.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Added Successfully');
                }
            })
        e.preventDefault();
    }
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="py-28 container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                    <h1 className="mb-2 text-3xl font-bold text-center">Add a Review</h1>
                    <p className="text-center text-sm mb-8"><small>Please Add a Review By Providing The Details Below</small></p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="block text-md border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            disabled
                            placeholder="User Name"
                            defaultValue={user.displayName}
                            ref={userNameRef} />

                        <input
                            type="number"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="rating"
                            min="1"
                            max="5"
                            placeholder="Rating Number Between 1 - 5"
                            ref={ratingRef} />

                        <textarea
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="description"
                            placeholder="Description"
                            ref={descRef} />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded primary-bg text-white hover:bg-green-dark focus:outline-none my-1"
                        >Post Review</button>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default AddReview;