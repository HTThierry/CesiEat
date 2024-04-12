import React from 'react';
import { Navigate } from 'react-router-dom';

import { jwtDecode } from 'jwt-decode';

function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
        let [k,v] = el.split('=');
        cookie[k.trim()] = v;
    })
    return cookie[name];
}


const isAuthenticated = (requiredUserTypes) => {
    const token = getCookie('accessToken');
    console.log(token);
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        console.log(decoded);

        const isAtLeastOneUserTypeEnabled = () => {
            return requiredUserTypes.some(type => decoded.accountType[type]);
        };

        return isAtLeastOneUserTypeEnabled();
    } catch (error) {
        console.error('Error decoding token', error);
        return false;
    }
};


// Protected Route Component
const ProtectedRoute = ({ children, requiredUserTypes, ...rest }) => {
    if (isAuthenticated(requiredUserTypes)) {
        return children;
    } else {
        return <Navigate to="/signin" replace />;
    }
};

export default ProtectedRoute;