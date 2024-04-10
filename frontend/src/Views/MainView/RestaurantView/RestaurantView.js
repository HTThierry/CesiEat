import React, { useEffect, useState } from 'react';
import "./RestaurantView.css"
import {useParams} from 'react-router-dom';

const RestaurantView = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const restaurantData = {
        title: "Burger King",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2008-11-11_Burger_King_in_Durham.jpg/1920px-2008-11-11_Burger_King_in_Durham.jpg",
        description: "Burger King is an American multinational chain of hamburger fast food restaurants.",
        menu: {
            burgers: [
                {
                    name: "Whopper",
                    price: 11.20,
                    description: "Our WHOPPER Sandwich is a 4 oz of savory flame-grilled beef.",
                    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/WHOPPER_with_Cheese%2C_at_Burger_King_%282014.05.04%29.jpg/1280px-WHOPPER_with_Cheese%2C_at_Burger_King_%282014.05.04%29.jpg",
                },
                {
                    name: "Big King",
                    price: 13.20,
                    description: "A taste of royalty with two savory flame-grilled beef patties.",
                    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/BK_Big_King_%282014%29_%28crop_and_color_balance_correction%29.jpg/1024px-BK_Big_King_%282014%29_%28crop_and_color_balance_correction%29.jpg",
                },
            ],
            boissons: [
                {
                    name: "Coca Cola",
                    price: 1.50,
                    description: "Refreshing cola beverage.",
                    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/langfr-1920px-Coca-Cola_logo.svg.png",
                },
                {
                    name: "Sprite",
                    price: 1.50,
                    description: "Lemon-lime flavored soft drink.",
                    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/2019-04-21_21_48_55_A_20_ounce_bottle_of_Sprite_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg/800px-2019-04-21_21_48_55_A_20_ounce_bottle_of_Sprite_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg",
                },
            ],
        },
    };

    const { title, photo, description, menu } = restaurantData;

    useEffect(() => {
        const fetchRestaurantData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.yourservice.com/restaurants/${id}`);
                const data = await response.json();
                setRestaurant(data);
            } catch (error) {
                console.error('Failed to fetch restaurant data:', error);
            }
            setLoading(false);
        };

        fetchRestaurantData();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!restaurantData) return <p>Restaurant not found.</p>;

    return (
        <div className="restaurant-view">
            <div className="restaurant-profile">
                <img src={photo} alt={title} className="restaurant-image"/>
                <h1 className="restaurant-title">{title}</h1>
                <p className="restaurant-description">{description}</p>
                <hr className="separator"/>
                <div className="menu">
                    {Object.entries(menu).map(([category, items]) => (
                        <div key={category} className="menu-category">
                            <h2 className="category-header">{category.toUpperCase()}</h2>
                            <div className="items">
                                {items.map((item) => (
                                    <div key={item.name} className="menu-item">
                                        <div className="item-info">
                                            <h3 className="item-name">{item.name}</h3>
                                            <p className="item-price">{item.price} €</p>
                                            <p className="item-description">{item.description}</p>
                                        </div>
                                        <div className="item-pic">
                                            <img className="item-image" src={item.pic} alt={item.name}/>
                                            <button className="add-button">+</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="backgroundRight"></div>
        </div>

    );
}

export default RestaurantView;
