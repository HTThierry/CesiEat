import React from "react";
import {Link} from "react-router-dom";
import profileIcon from "./ProfileIcon.svg";
import "./ProfileIcon.css"

const ProfileIcon = ({ children }) => {
    return (
        <Link to="/">
            <img src={profileIcon} alt="Logo" className="profile-icon"/>
        </Link>
    )
}


export default ProfileIcon;