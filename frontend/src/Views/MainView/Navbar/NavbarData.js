import React from 'react';
import './Navbar.css';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md";

export const NavbarData = [
    {
        title: 'Acceuil',
        path: '/',
        icon: <IoHomeOutline size="25px" color="#000"/>,
        cName: 'nav-text',
        allowedUserTypes: ['All']
    },
    {
        title: 'Commandes',
        path: '/commands',
        icon: <FaRegBookmark size="25px" color="#000"/>,
        cName: 'nav-text',
        allowedUserTypes: ['All']
    },
    {
        title: 'Créer un produit',
        path: '/createrestaurant',
        icon: <MdAddBusiness size="25px" color="#000"/>,
        cName: 'nav-text',
        allowedUserTypes: ['Restaurateur']
    },
    {
        title: 'Invitez des amis',
        path: '/invite',
        icon: <FiGift size="25px" color="#000"/>,
        cName: 'nav-text',
        allowedUserTypes: ['All']
    },
    {
        title: 'Notifications',
        path: '/notifications',
        icon: <FaBell size="25px" color="#000"/>,
        cName: 'nav-text',
        allowedUserTypes: ['All']
    }
];
