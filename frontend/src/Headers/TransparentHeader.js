import React from 'react';
import './Header.css';
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