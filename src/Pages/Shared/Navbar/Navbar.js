import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { BiCart, BiMenu, BiSearch, BiUser } from 'react-icons/bi';
import './Navbar.css';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <nav className="shadow-md">
            <div className="container mx-auto py-2">
                <div className="px-2 navbar flex items-center justify-between">
                    {/* Navbar logo goes here */}
                    <div className="navbar-brand w-1/4">
                        <img className="w-1/3" src={logo} alt="" />
                    </div>
                    {/* Navbar Primary Menu goes here */}
                    <div className="hidden md:block navbar-mainmenu w-1/2">
                        <Link to="/home"><button>Home</button></Link>
                        <Link to="/explore"><button>Explore</button></Link>
                        <Link to="/about"><button>About Us</button></Link>
                        <Link to="/contact"><button>Contact Us</button></Link>
                        <Link to="/dashboard"><button>Track My Order</button></Link>
                        <Link to="/dashboard"><button>Dashboard</button></Link>
                    </div>
                    {/* Navbar Secondary Menu goes here */}
                    <div className="hidden md:block navbar-user w-1/3">
                        <Link to="/login"><button><BiUser></BiUser></button></Link>
                        <Link to="/explore"><button><BiSearch></BiSearch></button></Link>
                        <Link to="/cart"><button><BiCart></BiCart></button></Link>
                    </div>
                    {/* Mobile Button Goes Here */}
                    <div className="md:hidden flex items-center">
                        <button onClick={handleToggle}><BiMenu></BiMenu></button>
                    </div>
                </div>
                {/* Mobile Menu Goes Here */}
                {toggle && <div className="md:hidden">
                    <Link className="block py-2 my-2" to="/home"><button>Home</button></Link>
                    <Link className="block py-2 my-2" to="/explore"><button>Explore</button></Link>
                    <Link className="block py-2 my-2" to="/dashboard"><button>Dashboard</button></Link>
                    <Link className="block py-2 my-2" to="/login"><button>Login</button></Link>
                </div>}
            </div>
        </nav>
    );
};

export default Navbar;