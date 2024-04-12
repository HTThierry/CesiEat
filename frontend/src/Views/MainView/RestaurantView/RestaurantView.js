import React, { useEffect, useState } from 'react';
import "./RestaurantView.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RestaurantView = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/api/v1/restaurants/${id}`)
      .then(response => {
        setRestaurant(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the restaurant:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!restaurant) return <p>Restaurant not found.</p>;

    return (
        <div className="restaurant-view">
          <div className="restaurant-profile">
            <img src={`data:${restaurant.restaurantImage.mime};base64,${restaurant.restaurantImage.base64}`} alt={restaurant.name} className="restaurant-image" />
            <h1 className="restaurant-title">{restaurant.name}</h1>
            <p className="restaurant-description">{restaurant.description}</p>
            <hr className="separator" />
            <div className="menu">
              {restaurant.product.map((productCategory, index) => (
                <div key={index} className="menu-category">
                  <h2 className="category-header">{productCategory.name.toUpperCase()}</h2>
                  <div className="items">
                    {productCategory.items.map((item, index) => (
                      <div key={index} className="menu-item">
                        <div className="item-info">
                          <h3 className="item-name">{item.name}</h3>
                          <p className="item-price">{item.price} €</p>
                          <p className="item-description">{item.description}</p>
                        </div>
                        <div className="item-pic">
                          {item.image ?
                            <img className="item-image" src={`data:${item.image.mime};base64,${item.image.base64}`} alt={item.name} /> :
                            <img className="item-image" src={item.pic} alt={item.name} />
                          }
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
    };

export default RestaurantView;
