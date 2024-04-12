import React from 'react';
import { Navigate } from 'react-router-dom';
import isAuthenticated from "./isAuthenthicated";


// Protected Route Component
const ProtectedRoute = ({ children, requiredUserTypes, ...rest }) => {
    if (isAuthenticated(requiredUserTypes)) {
        return children;
    } else {
        return <Navigate to="/" replace />;
    }
};

export default ProtectedRoute;