const User = require('../../models/userModel');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const logger = require('../../config/logger');
const jwt = require('jsonwebtoken');
const sendVerificationEmail = require('../../subcribers/sendVerificationEmail');
const { Console } = require('console');

// Create a new user

exports.createUser = async (req, res) => {
  try {
    console.log(req.body)
    const userData = {
      accountType: {
        Client: req.body.Client,
        Livreur: req.body.Livreur,
        Restaurateur: req.body.Restaurateur,
      },
      referralCode: req.body.ReferralCode,
      email: req.body.Mail,
      isEmailVerified: true,
      phone: req.body.PhoneNumber,
      password: req.body.PassWord,
      firstName: req.body.FirstName,
      lastName: req.body.LastName,
      age: parseInt(req.body.Age),  
      address: req.body.Address,
      city: req.body.City,
      postalCode: parseInt(req.body.PostalCode),  
    };
    const user = new User(userData);

    const savedUser = await user.save();
    
    res.status(201).json({ user: savedUser, message: 'User created. Please check your email to verify your account.' });
  } catch (error) {
    logger.error(`Create User Error: ${error.message}`, { endpoint: 'createUser', method: 'POST' });
    res.status(500).json({ message: error.message });
  }
};



// Get all users

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    logger.error(`Get All Users Error: ${error.message}`, { endpoint: 'getAllUsers', method: 'GET' });
    res.status(500).json({ message: error.message });
  }
};



// Get a user by ID

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      logger.warn(`User not found with ID: ${req.params.id}`, { endpoint: 'getUserById', method: 'GET' });
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    logger.error(`Get User By ID Error: ${error.message}`, { endpoint: 'getUserById', method: 'GET' });
    res.status(500).json({ message: error.message });
  }
};



// Update a user by ID


exports.updateUser = async (req, res) => {
  try {
    logger.info(`Updating user with ID: ${req.params.id}`, { endpoint: 'updateUser', method: 'PUT' });
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      logger.warn(`User not found for updating with ID: ${req.params.id}`, { endpoint: 'updateUser', method: 'PUT' });
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    logger.error(`Update User Error: ${error.message}`, { endpoint: 'updateUser', method: 'PUT' });
    res.status(500).json({ message: error.message });
  }
};

// Delete a user by ID

exports.deleteUser = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    if (!result) {
      logger.warn(`User not found for deletion with ID: ${req.params.id}`, { endpoint: 'deleteUser', method: 'DELETE' });
      return res.status(404).json({ message: 'User not found' });
    }
    logger.info(`User deleted successfully with ID: ${req.params.id}`, { endpoint: 'deleteUser', method: 'DELETE' });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    logger.error(`Delete User Error: ${error.message}`, { endpoint: 'deleteUser', method: 'DELETE' });
    res.status(500).json({ message: error.message });
  }
};


exports.register = async (req, res) => {
  const { email, password, accountType } = req.body; // Assuming you're using email, and accountType is part of your user model

  if (!email || !password) {
    logger.error("Email and password are required for registration");
    return res.status(400).json({ "msg": "Email and password are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email: email,
      password: hashedPassword,
      accountType: accountType // assuming you've added accountType to your schema
    });

    const savedUser = await newUser.save();
    logger.info(`New user created: ${email}`);
    return res.status(201).json({ "msg": "New User created!", "userId": savedUser._id });
  } catch (error) {
    logger.error(`Create User Error: ${error.message}`);
    return res.status(500).json({ "msg": "Error creating user", "error": error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await User.findOne({ email: email });
      if (user && await bcrypt.compare(password, user.password)) {
          const accessToken = jwt.sign(
              { userId: user._id, email: user.email, accountType: user.accountType },
              process.env.ACCESS_JWT_KEY,
              { expiresIn: '2m' }
          );

          const refreshToken = jwt.sign(
              { userId: user._id, email: user.email, accountType: user.accountType },
              process.env.REFRESH_JWT_KEY,
              { expiresIn: '1d' }
          );

          // cookie config
          const cookieOptions = {
              httpOnly: true,
              secure: process.env.NODE_ENV==='production',
              sameSite: 'Strict',
              expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
          };

          res.cookie('refreshToken', refreshToken, cookieOptions);

          logger.info(`User logged in: ${email}`);
          return res.status(200).json({
              message: "You are now connected!",
              accessToken
          });
      } else {
          logger.warn(`Login failed for user: ${email}`);
          return res.status(401).json({ message: "Invalid credentials" });
      }
  } catch (error) {
      logger.error(`Login Error: ${error.message}`);
      return res.status(500).json({ message: "An error occurred during the login process" });
  }
};