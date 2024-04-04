import React, {useState} from 'react';
import './MainLayout.css';
import BlackHeader from "../Components/Headers/BlackHeader";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from 'react-router-dom';
import DeleteAccount from "./DeleteAccount/DeleteAccount";

const MainLayout = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleDeleteAccount = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleLogOut = () => {
        setModalOpen(true);
    };

    return (
        <div className="mainLayout CesiEatsMedium">
            <BlackHeader />
            <div className="main-content">
                <Sidebar onDeleteAccount={handleDeleteAccount} onLogOut={ handleLogOut}/>
                <DeleteAccount isOpen={isModalOpen} onConfirm={handleCloseModal} onCancel={handleCloseModal}/>
                <style>{'body { background-color: rgba(250 , 146 , 105); }'}</style>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;