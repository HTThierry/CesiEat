import React, { useState, useEffect } from 'react';
import './MailConfirmation.css';
import { useLocation, useNavigate } from "react-router-dom";
import BlackHeader from "../Components/Headers/BlackHeader";

const MailConfirmation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [inputCode, setInputCode] = useState(['', '', '', '']);
    const [verificationCode, setVerificationCode] = useState('');
    const [codeIncorrect, setCodeIncorrect] = useState(false);
    const { accountInfo } = location.state || {};

    const handleChange = (index, event) => {
        const newInputCode = [...inputCode];
        newInputCode[index] = event.target.value.slice(0, 1);
        setInputCode(newInputCode);

        setCodeIncorrect(false);

        if (newInputCode.every(num => num.length === 1)) {
            const enteredCode = newInputCode.join('');
            if (enteredCode === verificationCode) {

                console.log('Code verified successfully!');

                setTimeout(() => {
                    navigate('/signup/information', { state: { accountInfo } });
                }, 500);
            } else {
                setCodeIncorrect(true);
            }
        }
    };

    const generateRandomFourDigitCode = () => {
        return Math.floor(1000 + Math.random() * 9000);
    };

    const sendVerificationEmail = (email, verificationCode) => {
        fetch('http://localhost:3000/api/v1/notifications/sendCodeByEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, code: verificationCode }),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log('Email sent successfully:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    const generateAndSendCode = () => {
        const code = generateRandomFourDigitCode();
        setVerificationCode(code.toString());
        sendVerificationEmail(accountInfo.Mail, code);
        //console.log(accountInfo.Mail, code);
    };

    useEffect(() => {
        generateAndSendCode();
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        generateAndSendCode()
    };

    return (
        <div className="logging CesiEatsMedium">
            <BlackHeader />
            <div className="backgroundLeft"></div>
            <div className="backgroundRight"></div>
            <form onSubmit={handleSubmit} className="container">
                <h2>Vérification de l'adresse e-mail :</h2>
                <div className="verification">
                    {inputCode.map((value, index) => (
                        <input
                            key={index}
                            type="text"
                            value={value}
                            onChange={(e) => handleChange(index, e)}
                            maxLength="1"
                            className="verification-input"
                            onKeyUp={e => {
                                if (e.key !== 'Backspace' && value) e.target.nextSibling?.focus();
                            }}
                        />
                    ))}
                </div>
                {codeIncorrect && <p className="error-message" style={{ marginBottom: '0' }}>Le code entré est incorrect. Veuillez réessayer.</p>}
                <button type="submit" className="button">Renvoyer le code</button>
            </form>
        </div>
    );
};

export default MailConfirmation;
