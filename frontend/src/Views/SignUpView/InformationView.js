import React, { useState, useEffect } from 'react';
import './InformationView.css';
import {useLocation, useNavigate} from "react-router-dom";
import BlackHeader from "../Components/Headers/BlackHeader";

const InformationView = () => {
    const navigate = useNavigate();
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const location = useLocation();
    const { accountInfo } = location.state || {};

    const createAccount = (accountDetails) => {
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(accountDetails),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log('Account created successfully:', data);
                navigate('/signin');

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        const completeAccountInfo = {
            ...accountInfo,
            LastName: lastName,
            FirstName: firstName,
            Age: age,
            Address: address,
            City: city,
            PostalCode: postalCode,
        };

        createAccount(completeAccountInfo);
    };


    // Apply non-scrollable styles to the body element
    useEffect(() => {

    }, []);

    return (
        <div className="logging CesiEatsMedium">
            <BlackHeader/>
            <div className="backgroundLeft"></div>
            <div className="backgroundRight"></div>
            <form onSubmit={handleSubmit} className="container" autoComplete="on">
                <h2>Indiquez vos informations :</h2>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Nom"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className="input"
                    required
                    autoComplete="family-name"
                />
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Prénom"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="input"
                    required
                    autoComplete="given-name"
                />
                <input
                    type="text"
                    id="age"
                    name="age"
                    placeholder="Age"
                    value={age}
                    pattern="^[0-9\s]{1,3}$"
                    onChange={e => setAge(e.target.value)}
                    className="input"
                    required
                    autoComplete="age"
                />
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Addresse postale"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    className="input "
                    required
                    autoComplete="street-address"
                />
                <div className="inputRow">
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Ville"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        className="input halfInput"
                        required
                        autoComplete="address-level2"
                    />
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        placeholder="Code postal"
                        pattern="^[0-9\s]{5,10}$"
                        value={postalCode}
                        onChange={e => setPostalCode(e.target.value)}
                        className="input halfInput"
                        required
                        autoComplete="postal-code"
                    />
                </div>
                <button type="submit" className="button">Continuer</button>
            </form>
        </div>
    );
};


export default InformationView;
