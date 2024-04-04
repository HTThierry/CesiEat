import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const closeSidebar = () => setSidebar(false);


    return (
        <div className="navBar">
            <IconContext.Provider value={{ color: '#fff', size:'35px'}}>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <div className={sidebar ? 'overlay' : 'hide-overlay'} onClick={closeSidebar}></div>
                <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}  >
                    <div className='nav-menu-items'>
                        <div className='navbar-toggle'>
                            <div className="profile-picture-placeholder"></div>
                            <div className="profile">
                                <div className="name-placeholder">Name</div>
                                <Link to="/" className="manage-account-button">Gérer le compte</Link>
                            </div>
                        </div>
                        {NavbarData.map((item, index) => {
                            return (
                                <div key={index} className={item.cName}>
                                <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
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