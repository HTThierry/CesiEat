import React from 'react';
import './TransparentHeader.css';
import WhiteLogo from "../Logos/WhiteLogo";
import BlackLogo from "../Logos/BlackLogo";

const TransparentHeader = ({ children }) => {
    return (
        <header className="transparent-header">
            <div className="black-logo-div">
                <BlackLogo/>
            </div>
            {children}
        </header>
    )
}


export default TransparentHeader;