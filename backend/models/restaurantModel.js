const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new mongoose.Schema({
  base64: String,
  mime: String,
});

const itemsSchema = new mongoose.Schema({

  name: String,
  description: String,
  price: Number,
  image: imageSchema,
});

const productSchema = new mongoose.Schema({
  name: String,
  items: [itemsSchema]
});

const restaurantSchema = new mongoose.Schema({
  displayType: String,
  name: String,
  description: String,
  cardImage: imageSchema,
  restaurantImage: imageSchema,
  deliveryFee: String,
  distance: Number,
  deliveryTime: String,
  rating: Number,
  promotions: String,
  product: [productSchema],
});


module.exports = mongoose.model('Restaurants', restaurantSchema);
