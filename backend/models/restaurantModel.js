const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  name: String,
  desc: String,
  price: Number,
  mime: String,
  image: String,
  categories: String,
  discount: Number,
});

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
  product: [productSchema],
});


module.exports = mongoose.model('Restaurants', restaurantSchema);
