import React from 'react';
import { Redirect, Route, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    const location = useLocation();
    return (
        <Route {...rest} render={({ location }) =>
            user.email ? (
                children
            ) : (
                <Redirect to={{
                    pathname: "/login",
                    state: { from: location }
                }}
                />
            )
        }>

        </Route>
    );
};

export default PrivateRoute;