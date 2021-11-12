import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Registration = () => {
    const { signUpWithPassword, signInWithPassword, logOut, isLoaded, Error, setError, user } = useAuth();
    const userNameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const confirmPassRef = useRef('');
    const handleSubmit = e => {
        const userName = userNameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const confirmPass = confirmPassRef.current.value;
        if (pass == confirmPass) {
            signUpWithPassword(userName, email, pass);
            setError('');
            alert('Registration Successful');
            userNameRef.current.value = "";
            emailRef.current.value = "";
            passRef.current.value = "";
            confirmPassRef.current.value = "";
            console.log(user);
        }
        else {
            setError('Password does not Match ! Please Try Again');
        }
        e.preventDefault();
    }
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                    <h1 className="mb-2 text-3xl font-bold text-center">Sign up</h1>
                    <p className="text-center mb-8"><small>Please register by providing the details below</small></p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            placeholder="User Name"
                            ref={userNameRef} />

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
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            ref={confirmPassRef} />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded primary-bg text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>

                    </form>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the {/* */}
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and {/* */}
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <Link className="no-underline border-b border-blue text-blue" to="/login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    );
};

export default Registration;