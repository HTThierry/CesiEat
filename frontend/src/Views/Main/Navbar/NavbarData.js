import React from 'react';
import './Navbar.css';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { FaBell } from "react-icons/fa";

export const NavbarData = [
    {
        title: 'Produits',
        path: '/products',
        icon: <IoHomeOutline size="25px" color="#000"/>,
        cName: 'nav-text'
    },
    {
        title: 'Commandes',
        path: '/commands',
        icon: <FaRegBookmark size="25px" color="#000"/>,
        cName: 'nav-text'
    },
    {
        title: 'Invitez des amis',
        path: '/invite',
        icon: <FiGift size="25px" color="#000"/>,
        cName: 'nav-text'
    },
    {
        title: 'Notifications',
        path: '/notifications',
        icon: <FaBell size="25px" color="#000"/>,
        cName: 'nav-text'
    }
];
