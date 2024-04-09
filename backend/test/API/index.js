const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Import user routes
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing requests in JSON format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection setup with Mongoose
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    // Set EJS as the view engine
    app.set('view engine', 'ejs');

    // Root API route
    app.get('/', (req, res) => {
      res.send('Welcome to the API');
    });

    // Use user routes for user-related operations
    app.use('/api/users', userRoutes);

    // Start the server after establishing the database connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
