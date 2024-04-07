import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import './Form.css';
import BlackHeader from "../Headers/BlackHeader";
const API_VERSION = process.env.REACT_APP_API_VERSION;
const API_URL = `http://localhost:3000`;
const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = `${API_URL}/api/${API_VERSION}/auth/login`;

        try {
            const response = await axios.post(apiUrl, { email, password });
            console.log('Login successful:', response.data);
            // Handle successful login here (e.g., redirecting the user, storing the access token, etc.)
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message || 'Error logging in');
            } else {
                setErrorMessage('An error occurred during login');
            }
        }
    };

    // Apply non-scrollable styles to the body element
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable scrolling on mount
        document.body.classList.add("no-scroll");
        return () => {
            document.body.style.overflow = 'auto'; // Re-enable scrolling on unmount
            document.body.classList.remove("no-scroll");
        };
    }, []);

    return (
        <div className="logging CesiEatsMedium">
            <BlackHeader/>
            <div className="backgroundLeft"></div>
            <div className="backgroundRight"></div>
            <form onSubmit={onSubmit} className="container">
                <h2>Indiquez votre e-mail et mot de passe :</h2>
                <input
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input"
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input"
                />
                <button type="submit" className="button">Continuer</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default SignInForm;
