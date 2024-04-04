import React from "react";
import {Link} from "react-router-dom";
import blackLogo from "./logo_black_cesieats.png.webp";
import "./BlackLogo.css"

const BlackLogo = () => {
    return (
        <Link to="/">
            <img src={blackLogo} alt="Logo" className="black-logo-image"/>
        </Link>
    )
}


export default BlackLogo;