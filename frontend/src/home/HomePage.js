import React from 'react';
import './HomePage.css'
import Footer from './Footer';
import TransparentHeader from "../Headers/TransparentHeader";
import {Link} from "react-router-dom";

function MainContent() {
    return (
        <main>
            <TransparentHeader>
                <div className="buttons">
                    <Link to="/signin">
                        <button className="sign-in-button">Connexion</button>
                    </Link>
                    <Link to="/signup">
                        <button className="sign-up-button">Inscription</button>
                    </Link>
                </div>
            </TransparentHeader>
            <div>
                <style>{'body { background-color: rgba(250 , 146 , 105); }'}</style>
                <div className="backgroundLeft"></div>
                <div className="backgroundRight"></div>
            </div>
            <Footer/>
        </main>
    );
}

export default MainContent;