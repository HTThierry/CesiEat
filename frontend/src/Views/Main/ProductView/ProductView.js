import React from 'react';
import './ProductView.css';
import Navbar from '../Navbar/Navbar';
import BlackHeader from "../../Components/Headers/BlackHeader";
import { MdOutlineShoppingCart  } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Footer from "../../Components/Footer/Footer";
import {Link} from "react-router-dom";

const ProductView = () => {
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
                        <Link to="/cart">
                            <MdOutlineShoppingCart color="#fff" size="40px" />
                        </Link>
                        <Link to="/profile">
                            <CgProfile color="#fff" size="40px" />
                        </Link>
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

export default ProductView;

