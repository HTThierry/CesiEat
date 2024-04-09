import React, { useEffect, useState } from 'react';
import './ProductView.css';
import Navbar from '../Navbar/Navbar';
import BlackHeader from "../../Components/Headers/BlackHeader";
import { MdOutlineShoppingCart  } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Footer from "../../Components/Footer/Footer";
import {Link} from "react-router-dom";
import RestaurantCardCarousel from "./RestaurantCardCarousel/RestaurantCardCarousel"
import VignetteCarousel from "./VignetteCarousel/VignetteCarousel";
import RestaurantCardGrid from "./RestaurantCardGrid/RestaurantCardGrid";


const ProductView = () => {
    const [restaurants, setRestaurants] = useState([]);
    const restaurantData = [
        {
            "displayType": "vignette",
            "items": [
                {
                    id: 1,
                    name: "The Italian Kitchen",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.5,
                    cuisine: ["Italian", "Pasta", "Pizza"],
                    priceRange: "$$",
                    distance: 1.2,
                    deliveryTime: '15-30',
                    deliveryFee: 5,
                    promotions: "20% off on all pasta dishes!",
                },
                {
                    id: 2,
                    name: "Sushi Place",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.7,
                    cuisine: ["Japanese", "Sushi", "Seafood"],
                    priceRange: "$$$",
                    distance: 3.5,
                    deliveryTime: '30-45',
                    deliveryFee: 5,
                    promotions: null,
                },
                {
                    id: 3,
                    name: "Vegan Delights",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 4,
                    name: "aaaaaaaaaaaaaaa",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 5,
                    name: "bbbbbbbbbbb",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 6,
                    name: "Sushi Place",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.7,
                    cuisine: ["Japanese", "Sushi", "Seafood"],
                    priceRange: "$$$",
                    distance: 3.5,
                    deliveryTime: '30-45',
                    deliveryFee: 5,
                    promotions: null,
                },
                {
                    id: 7,
                    name: "Vegan Delights",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 8,
                    name: "aaaaaaaaaaaaaaa",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 9,
                    name: "bbbbbbbbbbb",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
            ],
        },
        {
            title: "À découvrir sur Uber Eats",
            displayType: "carousel",
            items: [
                {
                    id: 1,
                    name: "The Italian Kitchen",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.5,
                    cuisine: ["Italian", "Pasta", "Pizza"],
                    priceRange: "$$",
                    distance: 1.2,
                    deliveryTime: '15-30',
                    deliveryFee: 5,
                    promotions: "20% off on all pasta dishes!",
                },
                {
                    id: 2,
                    name: "Sushi Place",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.7,
                    cuisine: ["Japanese", "Sushi", "Seafood"],
                    priceRange: "$$$",
                    distance: 3.5,
                    deliveryTime: '30-45',
                    deliveryFee: 5,
                    promotions: null,
                },
                {
                    id: 3,
                    name: "Vegan Delights",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 4,
                    name: "aaaaaaaaaaaaaaa",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 5,
                    name: "bbbbbbbbbbb",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 6,
                    name: "Sushi Place",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.7,
                    cuisine: ["Japanese", "Sushi", "Seafood"],
                    priceRange: "$$$",
                    distance: 3.5,
                    deliveryTime: '30-45',
                    deliveryFee: 5,
                    promotions: null,
                },
                {
                    id: 7,
                    name: "Vegan Delights",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 8,
                    name: "aaaaaaaaaaaaaaa",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 9,
                    name: "bbbbbbbbbbb",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
            ],
        },
        {
            "displayType": "grid",
            "items": [
                {
                    id: 1,
                    name: "The Italian Kitchen",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.5,
                    cuisine: ["Italian", "Pasta", "Pizza"],
                    priceRange: "$$",
                    distance: 1.2,
                    deliveryTime: '15-30',
                    deliveryFee: 5,
                    promotions: "20% off on all pasta dishes!",
                },
                {
                    id: 2,
                    name: "Sushi Place",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.7,
                    cuisine: ["Japanese", "Sushi", "Seafood"],
                    priceRange: "$$$",
                    distance: 3.5,
                    deliveryTime: '30-45',
                    deliveryFee: 5,
                    promotions: null,
                },
                {
                    id: 3,
                    name: "Vegan Delights",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 4,
                    name: "aaaaaaaaaaaaaaa",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 5,
                    name: "bbbbbbbbbbb",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 6,
                    name: "Sushi Place",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.7,
                    cuisine: ["Japanese", "Sushi", "Seafood"],
                    priceRange: "$$$",
                    distance: 3.5,
                    deliveryTime: '30-45',
                    deliveryFee: 5,
                    promotions: null,
                },
                {
                    id: 7,
                    name: "Vegan Delights",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 8,
                    name: "aaaaaaaaaaaaaaa",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
                {
                    id: 9,
                    name: "bbbbbbbbbbb",
                    imageUrl: "https://cdn.vox-cdn.com/thumbor/4OpKgCs2jl6EteBkg33LZRJsu2Y=/1x0:771x433/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48969821/ubereats-logo.0.0.png",
                    rating: 4.2,
                    cuisine: ["Vegan", "Organic"],
                    priceRange: "$",
                    distance: 0.5,
                    deliveryTime: '10-20',
                    deliveryFee: 5,
                    promotions: "Free delivery for first-time customers",
                },
            ],
        },
    ];



    useEffect(() => {
        setRestaurants(restaurantData);
    }, []);

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
                            <MdOutlineShoppingCart color="#fff" size="40px"/>
                        </Link>
                        <Link to="/profile/information">
                            <CgProfile color="#fff" size="40px"/>
                        </Link>
                    </div>
                }
            />

            <div className="content">
                {restaurants.map(section => (
                    <div key={section.title} className="section">
                        {section.title && <h2 className="title CesiEatsBold">{section.title}</h2>}
                        {renderSection(section)}
                    </div>
                ))}
            </div>

            <div className="backgroundLeft"></div>
            <div className="backgroundRight"></div>

            <Footer/>
        </div>

    );
};

export default ProductView;

