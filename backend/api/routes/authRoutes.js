const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); 
require('dotenv').config({ path: './config/.env' })

router.post('/login', authController.login);


// router.post('/register', authController.register);


router.post('/refresh-token', authController.refreshToken);


router.post('/logout', authController.logout);

module.exports = router;
