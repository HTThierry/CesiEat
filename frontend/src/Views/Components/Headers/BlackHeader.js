import React from 'react';
import './Header.css';
import WhiteLogo from "../Logos/WhiteLogo";

const BlackHeader = ({  leftIcons, children, rightIcons }) => {
    return (
        <header className="black-header">
            {leftIcons}
            <div className="white-logo-div">
                <WhiteLogo/>
            </div>
            {children || rightIcons}
        </header>
    )
}

export default BlackHeader;