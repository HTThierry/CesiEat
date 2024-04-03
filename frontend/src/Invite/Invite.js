import React, { useState } from 'react';
import './Invite.css';
import BlackHeader from "../Headers/BlackHeader";
import Footer from "../Footer/Footer";

const Invite = () => {
    return (
        <div className="invite-page CesiEatsMedium">
            <BlackHeader/>
            <div className="container">
                <h2>Votre/vos code(s) de parrainage :</h2>
                <label
                    className="input"
                />
                <label
                    className="input"
                />
                <label
                    className="input"
                />
            </div>
            <div className="backgroundLeft"></div>
            <div className="backgroundRight"></div>
            <Footer/>
        </div>

    );
};

export default Invite;

