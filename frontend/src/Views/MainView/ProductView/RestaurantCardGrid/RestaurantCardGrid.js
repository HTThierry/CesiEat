import React from 'react';
import "./RestaurantCardGrid.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

function RestaurantCardGrid({ restaurants }) {
    return (
        <div className="grid-layout">
            {restaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} details={restaurant}/>
            ))}
        </div>
    );
}

export default RestaurantCardGrid;
