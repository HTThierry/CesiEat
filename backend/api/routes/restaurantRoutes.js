const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Route to get all restaurants
router.get('/', restaurantController.getAllRestaurants);

module.exports = router;
