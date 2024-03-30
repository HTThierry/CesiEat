import React, { useState, useEffect } from 'react';
import './form.css';
import {useNavigate} from "react-router-dom";
import logo from "../images/logo_white_cesieats.webp"
import Blackheader from "../Headers/Blackheader";
import WhiteLogo from "../Logos/WhiteLogo";

const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Login data:', e)
        navigate('/password')
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
            <Blackheader/>
            <form onSubmit={handleSubmit} className="container">
                <div className="backgroundLeft"></div>
                <div className="backgroundRight"></div>
                <h2>Indiquez votre adresse e-mail et numéro de téléphone :</h2>
                <div className="inputContainer">
                    <input
                        type="email"
                        id="email"
                        placeholder="Saisissez un adresse e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="input"
                    />
                </div>
                <div className="inputContainer">
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
                </div>
                <button type="submit" className="button">Continuer</button>
            </form>
        </div>

    );
};

export default SignUp;
