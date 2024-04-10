import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import {Link, NavLink} from 'react-router-dom';
import { NavbarData } from './NavbarData';
import { IconContext } from 'react-icons';
import defaultProfilePic from "../../../Images/default.jpeg";

function Navbar() {
    const userType = "Client"
    const [profilePic] = useState(defaultProfilePic);
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const closeSidebar = () => setSidebar(false);

    const filteredNavbarData = NavbarData.filter(item =>
        item.allowedUserTypes.includes(userType) || item.allowedUserTypes.includes('All')
    );

    return (
        <div className="navBar">
            <IconContext.Provider value={{ color: '#fff', size:'35px'}}>
                <Link to='#' className='menu-bars'>
                    <FaBars onClick={showSidebar} />
                </Link>
                <div className={sidebar ? 'overlay' : 'hide-overlay'} onClick={closeSidebar}></div>
                <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}  >
                    <div className='nav-menu-items'>
                        <div className='navbar-toggle'>
                            <div className="profile-picture-placeholder">
                                <img src={profilePic} alt="Profile" className="profile-picture"/>
                            </div>
                            <div className="profile">
                            <div className="name-placeholder">Name</div>
                                <Link to="/profile/information" className="manage-account-button">Gérer le compte</Link>
                            </div>
                        </div>
                        {filteredNavbarData.map((item, index) => {
                            return (
                                <div key={index} className={item.cName}>
                                <NavLink to={item.path} onClick={closeSidebar}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </div>
                </nav>
            </IconContext.Provider>
        </div>
    );
}

export default Navbar;