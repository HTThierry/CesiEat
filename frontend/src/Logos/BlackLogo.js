import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo_black_cesieats.png.webp";
import "./BlackLogo.css"

const BlackLogo = ({ children }) => {
    return (
        <Link to="/">
            <img src={logo} alt="Logo" className="black-logo-image"/>
        </Link>
    )
}


export default BlackLogo;