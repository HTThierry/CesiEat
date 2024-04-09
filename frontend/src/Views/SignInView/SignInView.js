import React, { useState, useEffect } from 'react';
import '../../Styles/Form.css';
import BlackHeader from "../Components/Headers/BlackHeader";
const SignInView = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (email === password) {
            setErrorMessage('E-mail ou mot de passe incorrect');

        }
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
                <h2>Indiquez votre e-mail et mot de passe :</h2>
                <input
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    required
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    required
                />
                <button type="submit" className="button">Continuer</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default SignInView;
