import React from "react";
import {Link} from "react-router-dom";
import cartIcon from "./CartIcon.svg";
import "./CartIcon.css"

const CartIcon = () => {
    return (
        <Link to="/">
            <img src={cartIcon} alt="Logo" className="cart-icon"/>
        </Link>
    )
}


export default CartIcon;