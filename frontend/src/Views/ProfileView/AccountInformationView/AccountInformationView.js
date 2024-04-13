import React, {useEffect, useState} from "react";
import "./AccountInformationView.css"
import defaultProfilePic from '../../../Images/default.jpeg';
import {IoPencil} from "react-icons/io5";

const AccountInformationView = () => {
    const [profilePic, setProfilePic] = useState(defaultProfilePic);
    const [accountInfo, setAccountInfo] = useState({
        nom: '',
        prenom: '',
        age: '',
        telephone: '',
        email: '',
        livraison: '',
        codePostal: '',
        ville: '',
    });

    const [editField, setEditField] = useState(null);

    useEffect(() => {
        fetch('/api/account-info')
            .then(response => response.json())
            .then(data => setAccountInfo(data))
            .catch(error => console.error('Error fetching data: ', error));

        fetch('/api/profile-picture')
            .then(response => response.json())
            .then(data => setProfilePic(data.imageUrl))
            .catch(error => console.error('Error fetching profile picture: ', error));
    }, []);

    const handleProfilePicChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEdit = (field) => {
        setEditField(field);
    };

    const handleChange = (event) => {
        setAccountInfo({
            ...accountInfo,
            [editField]: event.target.value,
        });
    };

    const handleSave = (field) => {
        // Save the updated data to the API
        const updatedData = { [field]: accountInfo[field] };

        fetch(`/api/account-info/${field}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then(response => {
                if (response.ok) {
                    // Handle success
                    console.log(`Updated ${field}`);
                    setEditField(null); // Exit edit mode
                } else {
                    // Handle errors
                    console.error('Error updating data: ', response);
                }
            })
            .catch(error => console.error('Error saving data: ', error));
    };

    // Helper function to render editable field
    const renderEditableField = (field, label) => (
        <div className="info-field">
            <label>{label}:</label>
            {editField === field ? (
                <>
                    <input
                        type="text"
                        value={accountInfo[field]}
                        onChange={handleChange}
                        autoFocus
                    />
                    <button onClick={() => handleSave(field)}>Save</button>
                </>
            ) : (
                <>
                    <span>{accountInfo[field] || 'Empty'}</span>
                    <button onClick={() => handleEdit(field)}>Edit</button>
                </>
            )}
        </div>
    );

    return (
        <div className="account-info-container">
            <h2>Informations relatives au compte</h2>
            <div className="profile-picture-container">
                <label htmlFor="profile-pic-input" className="profile-pic-label">
                    <img src={profilePic} alt="Profile" className="profile-picture"/>
                    <IoPencil className="edit-icon"/>
                </label>
                <input
                    id="profile-pic-input"
                    type="file"
                    onChange={handleProfilePicChange}
                    className="profile-pic-input"
                    style={{display: 'none'}}
                />
            </div>
            {renderEditableField('nom', 'Nom')}
            {renderEditableField('prenom', 'Prénom')}
            {renderEditableField('age', 'Âge')}
            {renderEditableField('telephone', 'Numéro de téléphone')}
            {renderEditableField('email', 'Adresse e-mail')}
            {renderEditableField('livraison', 'Adresse de livraison')}
            {renderEditableField('codePostal', 'Code postal')}
            {renderEditableField('ville', 'Ville')}
        </div>
    );
}

export default AccountInformationView;