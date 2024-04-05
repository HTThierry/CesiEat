const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({

  accountType: {
      type: String,
      required: true,
      enum: ["Client",
        "Livreur",
        "Restaurateur"] 
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
    //unique: false,
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

// Pre-save hook to hash password before saving
userSchema.pre('save', async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Creating a compound unique index
userSchema.index({ email: 1, accountType: 1 }, { unique: true });

module.exports = mongoose.model('userModel', userSchema);
