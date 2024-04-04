import React, { useState } from 'react';
import './AccountTypepage.css';
import BlackHeader from "../Headers/BlackHeader";
import {useNavigate} from "react-router-dom";

const AccountTypePage = () => {
    const navigate = useNavigate()
    const [accountTypes, setAccountTypes] = useState({
        Client: false,
        Livreur: false,
        Restaurateur: false
    });
    const [referralCode, setReferralCode] = useState('');

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setAccountTypes(prevAccountTypes => ({
            ...prevAccountTypes,
            [name]: checked
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(accountTypes, referralCode);
        navigate('/contact', { state: { accountTypes, referralCode } });
    };

    return (
        <div className="logging CesiEatsMedium">
            <BlackHeader/>
            <div className="backgroundLeft"></div>
            <div className="backgroundRight"></div>
            <form onSubmit={handleSubmit} className="container">
                <h2>Indiquez le type de compte ?</h2>
                <div className="accountTypeOptions">
                    {["Client", "Livreur", "Restaurateur","Autres"].map((type) => (
                        <div key={type} className="checkboxContainer">
                            <label className="checkboxButton">
                                <input
                                    id={type}
                                    type="checkbox"
                                    name={type}
                                    checked={accountTypes[type]}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkboxLabel"></span>
                            </label>
                            <div className="checkboxText">{type}</div>
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
