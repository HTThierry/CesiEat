import React, { useEffect, useState } from 'react';
import './ProductView.css';
import RestaurantCardCarousel from "./RestaurantCardCarousel/RestaurantCardCarousel"
import VignetteCarousel from "./VignetteCarousel/VignetteCarousel";
import RestaurantCardGrid from "./RestaurantCardGrid/RestaurantCardGrid";
import axios from 'axios';


const ProductView = () => {

    const [restaurantData, setRestaurantData] = useState([
        {
            title: "Vignettes",
            displayType: "vignette",
            items: [],
        },
        {
            title: "À découvrir sur Cesi Eats",
            displayType: "carousel",
            items: [],
        },
        {
            title: "Restaurants en grille",
            displayType: "grid",
            items: [],
        }
    ]);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = () => {
        axios.get('http://localhost:3000/api/v1/restaurants')
            .then(response => {
                
                // Organiser les données par type
                const newData = restaurantData.map(section => ({
                    ...section,
                    items: [
                        ...section.items,
                        ...response.data.filter(restaurant => restaurant.displayType === section.displayType).map((restaurant, index) => ({
                            name: restaurant.name,
                            mime: restaurant.cardImage.mime,
                            image: restaurant.cardImage.base64,
                            rating: restaurant.rating,
                            cuisine: restaurant.cuisine,
                            distance: restaurant.distance,
                            deliveryTime: restaurant.deliveryTime,
                            deliveryFee: restaurant.deliveryFee,
                            promotions: restaurant.promotions
                        }))
                    ]
                }));
                setRestaurantData(newData);
            })
            .catch(error => {
                console.error('Error fetching restaurants:', error);
            });
    };


    const renderSection = (section) => {
        switch (section.displayType) {
            case 'carousel':
                return (
                    <RestaurantCardCarousel restaurants={section.items}/>
                );
            case 'vignette':
                return (
                    <VignetteCarousel restaurants={section.items}/>
                );
            case 'grid':
                return (
                    <RestaurantCardGrid restaurants={section.items}/>
                );
            default:
                return null;
        }
    };

    return (
        <div className="product-view">
            <div className="content">
                {restaurantData.map(section => (
                    <div key={section.title} className="section">
                        {section.title && <h2 className="title CesiEatsBold">{section.title}</h2>}
                        {renderSection(section)}
                    </div>
                ))}
            </div>

            <div className="backgroundLeft"></div>
            <div className="backgroundRight"></div>
        </div>
    );
};

export default ProductView;

