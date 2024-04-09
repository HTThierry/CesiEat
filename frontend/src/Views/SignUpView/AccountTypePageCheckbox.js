import React, { useState } from 'react';
import './AccountTypepage.css';
import BlackHeader from "../Headers/BlackHeader";
import { useNavigate } from "react-router-dom";

const AccountTypePage = () => {
    const navigate = useNavigate();
    const [accountType, setAccountType] = useState(''); // Single value for account type
    const [referralCode, setReferralCode] = useState('');

    const handleRadioButtonChange = (e) => {
        const { value } = e.target;
        setAccountType(value); // Set the account type to the value of the selected radio button
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(accountType, referralCode);
        navigate('/contact', { state: { accountType, referralCode } }); // Pass the selected accountType
    };

    return (
        <div className="logging CesiEatsMedium">
            <BlackHeader/>
            <div className="backgroundLeft"></div>
            <div className="backgroundRight"></div>
            <form onSubmit={handleSubmit} className="container">
                <h2>Indiquez le type de compte ?</h2>
                <div className="accountTypeOptions">
                    {["Client", "Livreur", "Restaurateur"].map((type) => ( // Removed "Autres" for simplicity
                        <div key={type} className="radioContainer">
                            <label className="radioButton">
                                <input
                                    id={type}
                                    type="radio" // Use radio buttons instead of checkboxes
                                    name="accountType"
                                    value={type}
                                    checked={accountType === type}
                                    onChange={handleRadioButtonChange}
                                />
                                <span className="radioLabel"></span>
                            </label>
                            <div className="radioText">{type}</div>
                        </div>
                    ))}
                </div>
                <div className="referralCodeInput">
                    <input
                        type="text"
                        placeholder="Numéro de parrainage"
                        value={referralCode}
                        onChange={(e) => setReferralCode(e.target.value)}
                        className="input"
                    />
                </div>
                <button type="submit" className="button">Continuer</button>
            </form>
        </div>
    );
};

export default AccountTypePage;

