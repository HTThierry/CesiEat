import React from 'react';
import './DeleteAccount.css';

const DeleteAccount = ({ isOpen, onConfirm, onCancel }) => {

    return (
        <div className="deleteAccount">
            <div className={isOpen ? 'overlay' : 'hide-overlay'} onClick={onCancel}></div>
            <div className={isOpen ? "centered-container" : 'hide'}>
                <p>Voulez-vous vraiment supprimer votre compte ?</p>
                <div className="button-container">
                    <button onClick={onConfirm} className="redButton">Yes</button>
                    <button onClick={onCancel} className="greenButton">No</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteAccount;