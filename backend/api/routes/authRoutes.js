const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); 
require('dotenv').config({ path: './config/.env' })
// Define the route for logging in
router.post('/login', authController.login);

// If you have a registration function in your authController, you can also define it here
// router.post('/register', authController.register);

// Define the route for refreshing the access token
router.post('/refresh-token', authController.refreshToken);

// You can add more routes here if needed, for example, a logout route
router.post('/logout', authController.logout);

module.exports = router;
