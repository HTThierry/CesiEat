const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Route to get all restaurants
router.get('/', restaurantController.getAllRestaurants);

// Route to create a new restaurant
router.post('/', restaurantController.createRestaurant);

module.exports = router;
