const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const restaurantSchema = new mongoose.Schema({
  displayType: String,
  name: String,
  desc: String,
  mime: String,
  image: String,
  priceRange: String,
  deliveryFee: String,
  distance: Number,
  deliveryTime: String,
  rating: Number,
  promotions: String,
});


module.exports = mongoose.model('Restaurants', restaurantSchema);
