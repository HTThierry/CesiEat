const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel',
    required: true
  },
  address: {
    type: String,
    required: true,
    maxlength: 200
  },
  total: {
    type: Number,
    required: true
  },
  deliveries: [{
    delivery: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'deliveryModel', // Reference to a DeliveryModel, which you would need to define separately
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  status: {
    type: String,
    enum: ['waiting', 'received', 'cancelled', 'completed'],
    default: 'waiting'
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('orderModel', orderSchema);
