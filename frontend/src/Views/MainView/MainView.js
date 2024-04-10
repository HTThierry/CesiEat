import React from 'react';
import './MainView.css';
import BlackHeader from "../Components/Headers/BlackHeader";
import {Link, Outlet} from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import {MdOutlineShoppingCart} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import Footer from "../Components/Footer/Footer";

const MainView = () => {

    return (
        <div className="main-view CesiEatsMedium">
            <BlackHeader
                leftIcons={
                    <div className="left-icons">
                        <Navbar/>
                    </div>
                }
                rightIcons={
                    <div className="right-icons">
                        <Link to="/cart">
                            <MdOutlineShoppingCart color="#fff" size="40px"/>
                        </Link>
                        <Link to="/profile/information">
                            <CgProfile color="#fff" size="40px"/>
                        </Link>
                    </div>
                }
            />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainView;