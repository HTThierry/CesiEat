import React, { useState, useEffect } from 'react';
import './InformationForm.css';
import {useLocation, useNavigate} from "react-router-dom";
import BlackHeader from "../Headers/BlackHeader";
import Footer from "../Footer/Footer";

const InformationForm = () => {
    const navigate = useNavigate()
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const location = useLocation();
    const { accountType, referralCode, email, phone, password } = location.state || {};

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ accountType, referralCode, email, phone, password, lastName, firstName, age, address, city, postalCode });
    };

    // Apply non-scrollable styles to the body element
    useEffect(() => {

    }, []);

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
                    className="input "
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
