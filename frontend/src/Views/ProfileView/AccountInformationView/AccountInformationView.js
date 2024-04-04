import React, {useEffect, useState} from "react";
import "./AccountInformationView.css"

const AccountInformationView = () => {
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
    // State to track the field being edited
    const [editField, setEditField] = useState(null);

    useEffect(() => {
        // Fetch the data from the API
        fetch('/api/account-info')
            .then(response => response.json())
            .then(data => setAccountInfo(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

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
            <h2>Informations sur le compte</h2>
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