import React, { useState, useEffect } from 'react';
import './Form.css';
import {useLocation, useNavigate} from "react-router-dom";
import BlackHeader from "../Headers/BlackHeader";


const ContactForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const location = useLocation();
    const { accountType, referralCode } = location.state || {};
    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/password', { state: { accountType, referralCode, email, phone } });
    };

    // Apply non-scrollable styles to the body element
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable scrolling on mount
        return () => {
            document.body.style.overflow = 'auto'; // Re-enable scrolling on unmount
        };
    }, []);

    return (
        <div className="logging CesiEatsMedium">
            <BlackHeader/>
            <div className="backgroundLeft"></div>
            <div className="backgroundRight"></div>
            <form onSubmit={handleSubmit} className="container">
                <h2>Indiquez votre adresse e-mail et numéro de téléphone :</h2>
                <input
                    type="email"
                    id="email"
                    placeholder="Saisissez un adresse e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input"
                />
                <input
                    type="tel"
                    id="phone"
                    placeholder="Saisissez un numéro de téléphone"
                    value={phone}
                    pattern="^[0-9\s]{9,45}$"
                    title="You can only enter numbers, with a minimal of 3 characters
                    upto 45 characters are accepted."
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="input"
                />
                <button type="submit" className="button">Continuer</button>
            </form>
        </div>

    );
};

export default ContactForm;
