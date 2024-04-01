import React from 'react';
import './BlackHeader.css';
import WhiteLogo from "../Logos/WhiteLogo";

const BlackHeader = ({ children }) => {
    return (
        <header className="black-header">
            <div className="white-logo-div">
                <WhiteLogo/>
            </div>
            {children}
        </header>
    )
}

export default BlackHeader;