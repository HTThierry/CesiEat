import React from 'react';
import './MainPage.css';
import Navbar from './Navbar/Navbar';
import BlackHeader from "../Headers/BlackHeader";
import { MdOutlineShoppingCart  } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
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
                        <MdOutlineShoppingCart color="#fff" size="40px" />
                        <CgProfile color="#fff" size="40px" />
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

