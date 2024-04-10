import React from 'react';
import './PopUp.css';

const PopUp = ({ text, isOpen, onConfirm, onCancel }) => {

    return (
        <div className="popup">
            <div className={isOpen ? 'overlay' : 'hide-overlay'} onClick={onCancel}></div>
            <div className={isOpen ? "centered-container" : 'hide'}>
                <p>{text}</p>
                <div className="button-container">
                    <button onClick={onConfirm} className="whiteButton">Yes</button>
                    <button onClick={onCancel} className="blackButton">No</button>
                </div>
            </div>
        </div>
    );
};

export default PopUp;