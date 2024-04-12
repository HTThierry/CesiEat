import React from 'react';
import { jwtDecode } from 'jwt-decode';
import getCookie from "./getCookie";

const isAuthenticated = (requiredUserTypes) => {
    const token = getCookie('accessToken');
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        const isAtLeastOneUserTypeEnabled = () => {
            const userTypeArray = Array.isArray(requiredUserTypes) ? requiredUserTypes : requiredUserTypes.requiredUserTypes;
            return userTypeArray.some(type => decoded.accountType && decoded.accountType[type]);
        };

        return isAtLeastOneUserTypeEnabled();
    } catch (error) {
        console.error('Error decoding token', error);
        return false;
    }
};


export default isAuthenticated;