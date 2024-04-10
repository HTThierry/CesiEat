import React, { useState, useEffect } from 'react';
import '../../Styles/Form.css';
import BlackHeader from "../Components/Headers/BlackHeader";
import {useLocation, useNavigate} from 'react-router-dom';


const PasswordView = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate()
    const location = useLocation();
    const { accountInfo } = location.state || {};

    const validatePassword = (password) => {
        const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return regex.test(password);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("password:", password,"confirmPassword:", confirmPassword)
        if (password !== confirmPassword) {
            setErrorMessage('Les mots de passe ne correspondent pas.');
            console.log("password:", password,"confirmPassword:", confirmPassword)
            return;
        }

        if (!validatePassword(password)) {
            console.log("password:", password,"confirmPassword:", confirmPassword)
            setErrorMessage('Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.');
            return;
        }

        accountInfo.PassWord = password;

        navigate('/signup/confirmemail', { state: { accountInfo: {
                    ...accountInfo,
                    PassWord: password
                } } });
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
            <div className="backgroundLeft"></div>
            <div className="backgroundRight"></div>
            <form onSubmit={onSubmit} className="container">
                <h2>Indiquez votre mot de passe :</h2>
                <input
                    type="password"
                    id="password"
                    placeholder="Saisssez votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    required
                />
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirmez votre mot de passe"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input"
                    required
                />
                <button type="submit" className="button">Continuer</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default PasswordView;
