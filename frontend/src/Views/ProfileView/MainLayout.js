import React, {useState} from 'react';
import './MainLayout.css';
import getCookie from "../../getCookie";
import {jwtDecode} from "jwt-decode";
import BlackHeader from "../Components/Headers/BlackHeader";
import Sidebar from "./Sidebar/Sidebar";
import {Outlet, useNavigate} from 'react-router-dom';
import PopUp from "./PopUp/PopUp";
import axios from 'axios';
const API_VERSION = process.env.REACT_APP_API_VERSION;
const API_URL = `http://localhost:3000`;

const MainLayout = () => {

    const [isDeleteOpen, setDeleteOpen] = useState(false);
    const [isLogOutOpen, setLogOutOpen] = useState(false);
    const navigate = useNavigate();

    const handleDeleteAccountOpen = () => {
        setDeleteOpen(true);
    };

    const handleLogOutOpen = () => {
        setLogOutOpen(true);
    };

    const handleClose = () => {
        setDeleteOpen(false);
        setLogOutOpen(false);
    };

    const handleDeleteAccount = () => {
    };

    const handleLogOut = async () => {
        const apiUrl = `${API_URL}/api/${API_VERSION}/auth/logout`;
        const token = getCookie('accessToken');

        const decoded = jwtDecode(token);
        try {
            const response = await axios.post(apiUrl, {}, {
                withCredentials: true
            });
            console.log('Logout successful:', response.data);
            navigate("/")
        } catch (error) {
            if (error.response && error.response.data) {
                console.log(error.response.data.message || 'Error logging in');
            } else {
                console.log('An error occurred during login');
            }
        }
    };


    return (
        <div className="mainLayout CesiEatsMedium">
            <BlackHeader />
            <div className="main-content">
                <Sidebar onDeleteAccount={handleDeleteAccountOpen} onLogOut={ handleLogOutOpen}/>
                <PopUp text={"Voulez-vous vraiment supprimer votre compte ?"} isOpen={isDeleteOpen} onConfirm={handleDeleteAccount} onCancel={handleClose}/>
                <PopUp text={"Voulez-vous vraiment vous déconnecter ?"} isOpen={isLogOutOpen} onConfirm={handleLogOut} onCancel={handleClose}/>
                <style>{'body { background-color: rgba(250 , 146 , 105); }'}</style>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;