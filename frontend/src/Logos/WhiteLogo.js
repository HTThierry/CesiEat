import React from 'react';
import './WhiteLogo.css';
import whiteLogo from "./logo_white_cesieats.webp";
import {Link} from "react-router-dom";

const WhiteLogo = () => {
    return (
        <Link to="/">
            <img src={whiteLogo} alt="Logo" className="white-logo-image"/>
        </Link>
    )
}

export default WhiteLogo;