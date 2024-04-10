const express = require('express');
require('dotenv').config({ path: './config/.env' }); // Load environment variables from the config directory
const userRoutes = require('./api/routes/userRoutes');
const app = express();
const cors = require('cors');
authRoutes = require('./api/routes/authRoutes');
notificationRoutes = require('./api/routes/notificationRoutes');
const ApiVersion = process.env.API_VERSION || 'v1'; // Use API version from environment variables or default to 'v1'
const PORT = process.env.API_PORT || 3000; 
const front_PORT = process.env.Front_PORT || 3002
const mongoose = require('mongoose');


app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    app.use(cors({
      origin: 'http://localhost:3001' 
    }));
    // Base route for API
    app.get(`/api/${ApiVersion}`, (req, res) => {
      res.send(`Welcome to the API version ${ApiVersion}`);
    });

    // User routes
    app.use(`/api/${ApiVersion}/users`, userRoutes);
    app.use(`/api/${ApiVersion}/auth`, authRoutes);
    app.use(`/api/${ApiVersion}/notifications`, notificationRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
