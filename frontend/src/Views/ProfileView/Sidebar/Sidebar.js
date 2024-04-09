import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FaChartLine , FaListUl  } from 'react-icons/fa';
import { MdOutlineShoppingCart, MdDashboard  } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsTruck } from "react-icons/bs";
import { IoMdCode } from "react-icons/io";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";

const Sidebar = ({ onDeleteAccount, onLogOut }) => {
    return (
        <aside className="sidebar">
            <NavLink to='/profile/information' activeClassName="active"> <CgProfile /> Informations sur le compte</NavLink>
            <NavLink to='/profile/statistics' activeClassName="active"> <FaChartLine /> Statistiques</NavLink>
            <NavLink to='/profile/suggestions' activeClassName="active"><MdOutlineShoppingCart /> Proposition de Commande</NavLink>
            <NavLink to='/profile/delivery' activeClassName="active"><BsTruck /> Acquitter une livraison</NavLink>
            <NavLink to='/profile/api' activeClassName="active"><IoMdCode /> API</NavLink>
            <NavLink to='/profile/users' activeClassName="active"><FaListUl /> Liste des utilisateurs</NavLink>
            <NavLink to='/profile/dashboard' activeClassName="active"> <MdDashboard /> Tableaux de bord</NavLink>
            <NavLink to='/profile/logs' activeClassName="active"><HiOutlineDocumentSearch /> Logs</NavLink>
            <button className="log-out" onClick={onLogOut}><IoIosLogOut  /> Déconnexion</button>
            <button onClick={onDeleteAccount}><RiDeleteBin5Line /> Supprimer le compte</button>
        </aside>
    );
};

export default Sidebar;
