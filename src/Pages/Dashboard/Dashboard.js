import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import AddReview from './AddReview/AddReview';
import './Dashboard.css';
import MyOrders from './MyOrders/MyOrders';
import Pay from './Pay/Pay';
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { logOut } = useAuth();
    return (
        <div class="relative min-h-screen md:flex">

            <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                <a href="#" class="block p-4 text-white font-bold">Better Dev</a>

                <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div class="sidebar bg-black text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

                <Link to="/" class="text-white flex items-center space-x-2 px-4">
                    <img src={logo} />
                </Link>

                <nav>
                    <Link to={`${url}/pay`} class="sidebar-nav block py-2.5 px-4 rounded transition duration-200 hover:text-white">
                        Pay
                    </Link>
                    <Link to={`${url}/myOrders`} class="sidebar-nav block py-2.5 px-4 rounded transition duration-200 hover:text-white">
                        My Orders
                    </Link>
                    <Link to={`${url}/addReview`} class="sidebar-nav block py-2.5 px-4 rounded transition duration-200 hover:text-white">
                        Add Review
                    </Link>
                    <button onClick={logOut} class="sidebar-nav w-full text-left block py-2.5 px-4 rounded transition duration-200 hover:text-white">
                        Logout
                    </button>
                </nav>
            </div>

            <div class="flex-1 p-10 text-2xl font-bold">
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                </Switch>
            </div>

        </div>
    );
};

export default Dashboard;