import React, { useState } from 'react';
import './AccountTypeView.css';
import BlackHeader from "../Components/Headers/BlackHeader";
import {useNavigate} from "react-router-dom";

const AccountTypeView = () => {
    const navigate = useNavigate()
    const [accountTypes, setAccountTypes] = useState({
        Client: false,
        Livreur: false,
        Restaurateur: false
    });
    const [referralCode, setReferralCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setAccountTypes(prevAccountTypes => {
            const updatedAccountTypes = {
                ...prevAccountTypes,
                [name]: checked
            };
            // Update the form validation state based on the number of checked checkboxes
            const numChecked = Object.values(updatedAccountTypes).filter(value => value).length;
            setIsFormValid(numChecked > 0);
            return updatedAccountTypes;
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isFormValid) {
            setErrorMessage('Please select at least one account type.');
            return;
        }

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
                    {["Client", "Livreur", "Restaurateur"].map((type) => (
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
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <input
                    type="text"
                    placeholder="Numéro de parrainage"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                    className="input"
                />
                <button type="submit" className="button">Continuer</button>
            </form>
        </div>
    );
};

export default AccountTypeView;
