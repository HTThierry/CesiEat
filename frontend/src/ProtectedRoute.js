import React from 'react';
import {redirect} from 'react-router-dom';

const isAuthenticated = (requiredUserTypes) => {
    const token = localStorage.getItem('accountToken');
    if (!token) return false;


    try {
    } catch (error) {
        console.error('Error decoding token', error);
        return false;
    }
};

// Protected Route Component
const ProtectedRoute = ({ children, requiredUserTypes, ...rest }) => {
    if (1===1) {
        return children;
    } else {
        return redirect("/signin");
    }
};

export default ProtectedRoute;