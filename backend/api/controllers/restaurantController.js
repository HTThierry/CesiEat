const Restaurant = require('../../models/restaurantModel');
const logger = require('../../config/logger');

// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
    
  } catch (error) {
    logger.error(`Get All Restaurants Error: ${error.message}`, { endpoint: 'getAllRestaurants', method: 'GET' });
    res.status(500).json({ message: error.message });
  }
};


// Create a new restaurant
exports.createRestaurant = async (req, res) => {
  
  try {
    const newRestaurants = await Restaurant.insertMany(req.body);
    res.status(201).json(newRestaurants);
    
  } catch (error) {
    logger.error(`Create Restaurant Error: ${error.message}`, { endpoint: 'createRestaurant', method: 'POST' });
    res.status(500).json({ message: error.message });
  }
};


// Get a single restaurant by ID
exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (error) {
    logger.error(`Get Restaurant By ID Error: ${error.message}`, { endpoint: 'getRestaurantById', method: 'GET' });
    res.status(500).json({ message: error.message });
  }
};
