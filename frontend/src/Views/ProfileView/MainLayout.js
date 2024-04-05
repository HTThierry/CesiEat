import React, {useState} from 'react';
import './MainLayout.css';
import BlackHeader from "../Components/Headers/BlackHeader";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from 'react-router-dom';
import PopUp from "./PopUp/PopUp";

const MainLayout = () => {

    const [isDeleteOpen, setDeleteOpen] = useState(false);
    const [isLogOutOpen, setLogOutOpen] = useState(false);

    const handleDeleteAccount = () => {
        setDeleteOpen(true);
    };

    const handleClose = () => {
        setDeleteOpen(false);
        setLogOutOpen(false);
    };

    const handleLogOut = () => {
        setLogOutOpen(true);
    };

    return (
        <div className="mainLayout CesiEatsMedium">
            <BlackHeader />
            <div className="main-content">
                <Sidebar onDeleteAccount={handleDeleteAccount} onLogOut={ handleLogOut}/>
                <PopUp text={"Voulez-vous vraiment supprimer votre compte ?"} isOpen={isDeleteOpen} onConfirm={handleDeleteAccount} onCancel={handleClose}/>
                <PopUp text={"Voulez-vous vraiment vous déconnecter ?"} isOpen={isLogOutOpen} onConfirm={handleLogOut} onCancel={handleClose}/>
                <style>{'body { background-color: rgba(250 , 146 , 105); }'}</style>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;