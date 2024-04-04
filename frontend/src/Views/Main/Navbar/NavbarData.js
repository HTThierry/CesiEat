import React from 'react';
import './Navbar.css';
import Command from "./Images/Command.svg";
import Invite from "./Images/Invite.svg";
import Notifications from "./Images/Notifications.svg";

export const NavbarData = [
    {
        title: 'Commandes',
        path: '/commands',
        icon: <img src={Command} alt="Logo" className="icon"/>,
        cName: 'nav-text'
    },
    {
        title: 'Invitez des amis',
        path: '/invite',
        icon: <img src={Invite} alt="Logo" className="icon"/>,
        cName: 'nav-text'
    },
    {
        title: 'Notifications',
        path: '/notifications',
        icon: <img src={Notifications} alt="Logo" className="icon"/>,
        cName: 'nav-text'
    }
];
