import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    // to catch the location
    const location = useLocation();
    console.log(location);

    // loader/spinner on data load
    if (loading) {
        return <div>
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
        </div>
    }
    else if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

/**
 * STEPS OF PRIVATE ROUTE
 * 1. check whether the user is logged in or not
 * 2. if the user is logged in, allow them to visit the private route
 * 3. if the user is not logged in, redirect them to the login page
 * 4. setup the private/protected route
 * 5. 
 */