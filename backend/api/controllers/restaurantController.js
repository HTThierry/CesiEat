const Restaurant = require('../../models/restaurantModel');
const logger = require('../../config/logger');

// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    console.log(restaurants);

    res.json(restaurants);
    
  } catch (error) {
    logger.error(`Get All Restaurants Error: ${error.message}`, { endpoint: 'getAllRestaurants', method: 'GET' });
    res.status(500).json({ message: error.message });
  }
};
