import React from 'react';
import { BiEnvelope } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import footerLogo from '../../../images/footer-logo.png';
import paymentIcons from '../../../images/payment.png';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="bg-black pt-16 pb-5 px-10 md:px-0">
            <div className="container mx-auto footer flex flex-wrap">
                <div className="footer-brand mb-10 md:mb-0 w-full md:w-1/4">
                    <img src={footerLogo} alt="" />
                </div>
                <div className="footer-sitemap w-full md:w-1/4 mb-10 md:mb-0">
                    <Link className="block mb-2 text-white text-white" to="/explore">Home</Link>
                    <Link className="block mb-2 text-white" to="/explore">About Us</Link>
                    <Link className="block mb-2 text-white" to="/explore">Explore</Link>
                    <Link className="block mb-2 text-white" to="/explore">Contact Us</Link>
                    <Link className="block text-white" to="/explore">Track Your Order</Link>
                </div>
                <div className="footer-sitemap-secondary mb-10 md:mb-0 w-full md:w-1/4">
                    <Link className="block mb-2 text-white" to="/explore">Home</Link>
                    <Link className="block mb-2 text-white" to="/explore">About Us</Link>
                    <Link className="block mb-2 text-white" to="/explore">Explore</Link>
                    <Link className="block mb-2 text-white" to="/explore">Contact Us</Link>
                    <Link className="block text-white" to="/explore">Track Your Order</Link>
                </div>
                <div className="footer-newsletter mb-10 md:mb-0 text-white w-full md:w-1/4">
                    <h2 className="mb-3">NEWSLETTER</h2>
                    <p className="mb-5">Promotions, new products and sales delivered straight to your inbox.
                    </p>
                    <form onSubmit="">
                        <input style={{ width: '80%' }} className="focus:outline-none bg-transparent border-b" type="email" name="email" placeholder="Sign Up With Your Email" id="" />
                        <button className="-ml-6" type="submit"><BiEnvelope></BiEnvelope></button>
                    </form>
                </div>

            </div>

            <div className="copyright-section pt-5 text-white border-t border-gray-500 mt-24">
                <div className="container mx-auto copyright flex flex-wrap justify-between">
                    <div className="md:block mb-5 md:mb-0 social-icons text-center w-full md:w-1/3">
                        <a href="#" target="_blank"><AiFillFacebook className="text-2xl"></AiFillFacebook></a>
                        <a href="#" target="_blank"><AiFillInstagram className="text-2xl"></AiFillInstagram></a>
                    </div>
                    <div className="payment-icons mb-5 md:mb-0 text-center w-full md:w-1/3">
                        <img className="mx-auto" src={paymentIcons} alt="" />
                    </div>
                    <div className="copyright-text w-full md:w-1/3">
                        <p className="text-center">Copyright © 2020 Hoogtech Ltd.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;