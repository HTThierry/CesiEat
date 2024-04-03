import React, { useState } from 'react';
import './MainPage.css';
import Navbar from './Navbar/Navbar';
import BlackHeader from "../Headers/BlackHeader";
import ProfileIcon from "../Icons/Profile/ProfileIcon";
import CartIcon from "../Icons/Cart/CartIcon";
import Footer from "../Footer/Footer";

const MainPage = () => {
    return (
        <div className="main-page CesiEatsMedium">
            <BlackHeader
                leftIcons={
                    <div className="left-icons">
                        <Navbar/>
                    </div>
                }
                rightIcons={
                    <div className="right-icons">
                        <CartIcon/>
                        <ProfileIcon/>
                    </div>
                }
            />
            <div className="container">
            </div>
            <div className="some">

            </div>
            <div className="backgroundLeft"></div>
            <div className="backgroundRight"></div>
            <Footer/>
        </div>

    );
};

export default MainPage;

