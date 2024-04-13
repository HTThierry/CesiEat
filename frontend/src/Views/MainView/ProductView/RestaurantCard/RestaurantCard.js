import React from 'react';
import "./RestaurantCard.css"
import {Link} from "react-router-dom";

function RestaurantCard({ details }) {


    return (
        <div className="restaurant-card">
            <Link to={`/restaurant/${details.id}`}>
                <div className="promotion-div">
                    {details.promotions && <div className="promotion-banner">{details.promotions}</div>}
                </div>
                <img src={`data:${details.mime};base64,${details.image}`} alt={details.name} className="restaurant-image"/>
                <div className="restaurant-info">
                    <div className="restaurant-name-and-rating">
                        <h3 className="restaurant-name">{details.name}</h3>
                        <div className="restaurant-rating">{details.rating}</div>
                    </div>
                    <div className="restaurant-meta">
                        <span className="restaurant-delivery-info">Frais de livraison : {details.deliveryFee} €</span>
                        <span className="restaurant-delivery-time">{details.deliveryTime} min</span>
                    </div>
                </div>
            </Link>
        </div>
);
}

export default RestaurantCard;
