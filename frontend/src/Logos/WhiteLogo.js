import React from 'react';
import './WhiteLogo.css';
import logo from "./logo_white_cesieats.webp";
import {Link} from "react-router-dom";

const WhiteLogo = ({children}) => {
    return (
        <Link to="/">
            <img src={logo} alt="Logo" className="white-logo-image"/>
        </Link>
    )
}

export default WhiteLogo;