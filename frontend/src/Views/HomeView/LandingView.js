import React from 'react';
import './LandingView.css'
import Footer from '../Components/Footer/Footer';
import TransparentHeader from "../Components/Headers/TransparentHeader";
import {Link} from "react-router-dom";

function LandingView() {

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
            <div style={{
                position: 'fixed',
                bottom: '0',
                width: '100%'}}>
                <Footer/>
            </div>
        </main>
    );
}

export default LandingView;