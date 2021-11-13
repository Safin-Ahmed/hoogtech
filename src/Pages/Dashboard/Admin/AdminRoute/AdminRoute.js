import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoaded } = useAuth();
    const location = useLocation();
    if (isLoaded) {
        return <div class="flex justify-center items-center">
            <div
                class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
            ></div>
        </div>
    }
    return (
        <Route {...rest} render={({ location }) =>
            user.email && admin ? (
                children
            ) : (
                <Redirect to={{
                    pathname: "/",
                    state: { from: location }
                }}
                />
            )
        }>

        </Route>
    );
};

export default AdminRoute;