const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  accountType: {
      Client: { type: Boolean, default: false },
      Livreur: { type: Boolean, default: false },
      Restaurateur: { type: Boolean, default: false }
  },
  referralCode: {
      type: String,
      default: null
  },
  clientReferralCode: {
    type: String,
    default: ''
  },
  livreurReferralCode: {
    type: String,
    default: ''
  },
  restaurateurReferralCode: {
    type: String,
    default: ''
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
    trim: true,
    lowercase: true
  },
  isEmailVerified: { type: Boolean, default: false },
  emailVerificationToken: String,
  emailVerificationTokenExpires: Date,
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
        return /\d{5}/.test(v); 
      },
      message: props => `${props.value} is not a valid postal code!`
    }
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
}, { timestamps: true });




userSchema.pre('save', async function (next) {
  if (this.isModified('accountType')) {
    if (this.accountType.Client) {
      this.clientReferralCode = 'cl_' + Math.random().toString(36).substring(2, 8);
    }
    if (this.accountType.Livreur) {
      this.livreurReferralCode = 'liv_' + Math.random().toString(36).substring(2, 8);
    }
    if (this.accountType.Restaurateur) {
      this.restaurateurReferralCode = 'rest_' + Math.random().toString(36).substring(2, 8);
    }
  }

  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('userModel', userSchema);
