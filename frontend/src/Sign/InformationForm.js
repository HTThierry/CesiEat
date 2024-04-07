import React, { useState } from 'react';
import './InformationForm.css';
import { useLocation, useNavigate } from "react-router-dom";
import BlackHeader from "../Headers/BlackHeader";
import axios from 'axios';

// Use the environment variables directly
const API_PORT = process.env.REACT_APP_API_PORT;
const API_VERSION = process.env.REACT_APP_API_VERSION;
//const API_URL = process.env.REACT_APP_API_URL || `http://localhost:${API_PORT}`;
const API_URL = `http://localhost:3000`;

const InformationForm = () => {
    const navigate = useNavigate();
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const location = useLocation();
    const { accountType, referralCode, email, phone, password } = location.state || {};

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            accountType,
            referralCode,
            email,
            phone,
            password,
            lastName,
            firstName,
            age,
            address,
            city,
            postalCode
        };

        try {
            const apiUrl = `${API_URL}/api/${API_VERSION}/users`; // Construct the API URL
            const response = await axios.post(apiUrl, userData);
            console.log('User created:', response.data);
            navigate('/success'); // Adjust as needed for your routing
        } catch (error) {
            // Check if the error has a response and response has data
            if (error.response && error.response.data) {
                console.error('Error creating user:', error.response.data);
            } else {
                // Handle the case where error response is undefined
                console.error('Error creating user:', error.message);
            }
        }
    };



    return (
        <div className="logging CesiEatsMedium">
            <BlackHeader/>
            <div className="backgroundLeft"></div>
            <div className="backgroundRight"></div>
            <form onSubmit={handleSubmit} className="container">
                <h2>Indiquez vos informations :</h2>
                <input
                    type="text"
                    placeholder="Nom"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className="input"
                    required
                />
                <input
                    type="text"
                    placeholder="Prénom"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="input"
                    required
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    className="input"
                    required
                />
                <input
                    type="text"
                    placeholder="Addresse postale"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    className="input"
                    required
                />
                <div className="inputRow">
                    <input
                        type="text"
                        placeholder="Ville"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        className="input halfInput"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Code postal"
                        value={postalCode}
                        onChange={e => setPostalCode(e.target.value)}
                        className="input halfInput"
                        required
                    />
                </div>
                <button type="submit" className="button">Continuer</button>
            </form>
        </div>
    );
};

export default InformationForm;
