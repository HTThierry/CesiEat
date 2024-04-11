import React, {useState} from 'react';
import './MainLayout.css';
import BlackHeader from "../Components/Headers/BlackHeader";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from 'react-router-dom';
import PopUp from "./PopUp/PopUp";

const MainLayout = () => {

    const [isDeleteOpen, setDeleteOpen] = useState(false);
    const [isLogOutOpen, setLogOutOpen] = useState(false);

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

    const handleLogOut = () => {
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