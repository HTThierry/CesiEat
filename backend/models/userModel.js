const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

  accountType: {
      type: String,
      required: false,
      enum: ["Customer",
        "Delivery man",
        "Restaurateur",
        "Others"] 
  },
  referralCode: {
      type: String,
      default: null
  },
  ownReferralCode: {
      type: String,
      default: () => {
          return Math.random().toString(36).substring(2, 10);
      }
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  age: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postalCode: {
    type: Number,
    required: true,
    validate: {
      validator: function(v) {
        return /\d{5}/.test(v); // Adjust the regex based on the country's postal code format
      },
      message: props => `${props.value} is not a valid postal code!`
    }
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
}, { timestamps: true });

// Handle duplicate email errors
// userSchema.post('save', function(error, doc, next) {
//   if (error.name === 'MongoServerError' && error.code === 11000) {
//     next(new Error('Email already exists.'));
//   } else {
//     next(error);
//   }
// });

module.exports = mongoose.model('userModel', userSchema);
