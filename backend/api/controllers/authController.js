const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');
const logger = require('../../config/logger'); 
const express = require('express');
const router = express.Router();
const storeRevokedToken = require('../../subcribers/storeRevokedToken.js');


exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      logger.warn(`Login failed for user: ${email}`);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
      { userId: user._id, email: user.email, accountType: user.accountType },
      process.env.ACCESS_JWT_KEY,
      { expiresIn: '3m' }
    );

    const refreshToken = jwt.sign(
      { userId: user._id, email: user.email, accountType: user.accountType },
      process.env.REFRESH_JWT_KEY,
      { expiresIn: '1d' }
    );

    const cookieOptions = {
      httpOnly: false,
      secure: false,
      sameSite: 'Strict',
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
    };

    res.cookie('refreshToken', refreshToken, cookieOptions);
    res.cookie('accessToken', accessToken, cookieOptions);
    //localStorage.setItem('accountToken', accessToken);
    //window.localStorage.setItem('refreshToken', refreshToken);
    
    logger.info(`User logged in: ${email}`);
    res.status(200).json({ message: "You are now connected!", accessToken, refreshToken});
  } catch (error) {
    logger.error(`Login Error: ${error.message}`);
    res.status(500).json({ message: "An error occurred during the login process" });
  }
};

exports.authenticate = (req, res, next) => {
    let token = req.headers["authorization"];
    if (!token) {
      logger.warn("Token is required for authentication");
      return res.status(403).json({ message: "A token is required for authentication" });
    }
  
    token = token.split(' ')[1]; // Assuming token comes as 'Bearer <token>'
  
    jwt.verify(token, process.env.ACCESS_JWT_KEY, (err, decoded) => {
      if (err) {
        logger.error("Invalid Token");
        return res.status(401).json({ message: "Invalid Token" });
      }
  
      req.user = decoded; // Add the decoded token to the request so downstream handlers can use it
      logger.info(`Token validated for user: ${decoded.email}`);
      next(); // Proceed to the next middleware/route handler
    });
  };

exports.refreshToken = (req, res) => {
  const token = req.cookies.refreshToken; // Assuming the refresh token is sent in cookie

  if (!token) {
    logger.warn("Refresh token is required");
    return res.status(401).json({ message: "Refresh token is required" });
  }

  jwt.verify(token, process.env.REFRESH_JWT_KEY, (err, decoded) => {
    if (err) {
      logger.error("Invalid Refresh Token");
      return res.status(401).json({ message: "Invalid Refresh Token" });
    }

    const accessToken = jwt.sign(
      { userId: decoded.userId, email: decoded.email, accountType: decoded.accountType },
      process.env.ACCESS_JWT_KEY,
      { expiresIn: '15m' }
    );

    logger.info(`Access token refreshed for user: ${decoded.email}`);
    res.status(200).json({ accessToken });
  });
};
  


exports.logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.accessToken;
    console.log(refreshToken);  
      if (!refreshToken) {
        console.log(refreshToken)
          return res.status(400).json({ message: "Refresh token is required" });
      }

      
      await storeRevokedToken(refreshToken);

      
      res.clearCookie('refreshToken'); 
      res.status(200).json({ message: "Successfully logged out" });
  } catch (error) {
      console.error("Logout Error:", error);
      res.status(500).json({ message: "An error occurred during the logout process" });
  }
};


router.get('/verify-email/:token', async (req, res) => {
  const user = await User.findOne({
      emailVerificationToken: req.params.token,
      emailVerificationTokenExpires: { $gt: Date.now() }
  });

  if (!user) {
      return res.status(400).send('Token is invalid or has expired');
  }

  user.isEmailVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationTokenExpires = undefined;
  await user.save();

  res.send('Email has been verified');
});
