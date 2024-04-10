const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.post('/sendCodeByEmail', notificationController.sendCodeByEmail);

module.exports = router;
