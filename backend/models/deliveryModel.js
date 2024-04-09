const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderModel',
    required: true
  },
  courier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourierModel' // or 'UserModel' if your couriers are users
  },
  status: {
    type: String,
    enum: ['pending', 'out_for_delivery', 'delivered', 'failed'],
    default: 'pending'
  },
  estimatedDelivery: {
    type: Date
  },
  actualDelivery: {
    type: Date
  },
  deliveryAddress: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('DeliveryModel', deliverySchema);
