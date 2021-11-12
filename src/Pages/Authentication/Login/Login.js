import React, { useRef } from 'react';
import { Lin, useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
const Login = () => {
    const { signInWithPassword, isLoaded, Error, user } = useAuth();
    const emailRef = useRef('');
    const passRef = useRef('');
    const location = useLocation();
    const history = useHistory();
    const handleSubmit = e => {
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        signInWithPassword(email, pass, location, history);
        console.log(user);
        e.preventDefault();

    }
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <Navbar />
            <div className="container py-28 max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                    <h1 className="mb-2 text-3xl font-bold text-center">Login</h1>
                    <p className="text-center mb-8"><small>Please Login by providing the details below</small></p>
                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            ref={emailRef} />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            ref={passRef} />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded primary-bg text-white hover:bg-green-dark focus:outline-none my-1"
                        >Login</button>

                    </form>

                </div>

                <div className="text-grey-dark mt-6">
                    Don't have an account?
                    <Link className="no-underline border-b border-blue text-blue" to="/register">
                        Register
                    </Link>.
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;