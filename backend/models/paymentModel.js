const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderModel',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  transactionId: { // This would be provided by the payment gateway
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('PaymentModel', paymentSchema);
