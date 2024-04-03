const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  menu: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductModel'
  }],
  ratings: [{
    rating: { type: Number, min: 1, max: 5 },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel'
    },
    comment: { type: String }
  }]
}, { timestamps: true });

module.exports = mongoose.model('RestaurantModel', restaurantSchema);
