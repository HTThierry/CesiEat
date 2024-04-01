import React, { useState, useEffect } from 'react';
import './Form.css';
import BlackHeader from "../Headers/BlackHeader";
import {useLocation, useNavigate} from 'react-router-dom';


const PasswordForm = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate()
    const location = useLocation();
    const { accountType, referralCode, email, phone } = location.state || {};

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\]\[;'-])[A-Za-z\d@$!%*?&\]\[;'-]{8,16}$/;
        return regex.test(password);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Les mots de passe ne correspondent pas.');
            return;
        }

        if (!validatePassword(password)) {
            setErrorMessage('Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.');
            return;
        }

        navigate('/information', { state: { accountType, referralCode, email, phone, password} });
    };

    // Apply non-scrollable styles to the body element
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable scrolling on mount
        document.body.classList.add("no-scroll")
        return () => {
            document.body.style.overflow = 'auto'; // Re-enable scrolling on unmount
            document.body.classList.remove("no-scroll")
        };
    }, []);

    return (
        <div className="logging CesiEatsMedium">
            <BlackHeader/>
            <form onSubmit={onSubmit} className="container">
            <div className="backgroundLeft"></div>
                <div className="backgroundRight"></div>
                <h2>Indiquez votre mot de passe :</h2>
                <input
                    type="password"
                    id="password"
                    placeholder="Saisssez votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input"
                />
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirmez votre mot de passe"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="input"
                />
                <button type="submit" className="button">Continuer</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default PasswordForm;
