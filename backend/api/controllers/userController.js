const User = require('../../models/userModel');

const logger = require('../../config/logger');


// Create a new user

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
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
