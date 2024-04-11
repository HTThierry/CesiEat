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
    // const newRestaurant = new Restaurant({
    //   displayType: req.body.displayType,
    //   name: req.body.name,
    //   desc: req.body.desc,
    //   mime: req.body.mime,
    //   image: req.body.image,
    //   deliveryFee: req.body.deliveryFee,
    //   distance: req.body.distance,
    //   deliveryTime: req.body.deliveryTime,
    //   rating: req.body.rating,
    //   promotions: req.body.promotions,
    //   product: req.body.product  
    // });
    // const savedRestaurant = await newRestaurant.save();
    // res.status(201).json(savedRestaurant);

    const newRestaurants = await Restaurant.insertMany(req.body);
    res.status(201).json(newRestaurants);


    
  } catch (error) {
    logger.error(`Create Restaurant Error: ${error.message}`, { endpoint: 'createRestaurant', method: 'POST' });
    res.status(500).json({ message: error.message });
  }
};