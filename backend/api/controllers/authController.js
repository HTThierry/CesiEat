const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/userModel'); 
const logger = require('../../config/logger'); 

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
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    };

    res.cookie('refreshToken', refreshToken, cookieOptions);
    logger.info(`User logged in: ${email}`);
    res.status(200).json({ message: "You are now connected!", accessToken });
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
  
  exports.logout = (req, res) => {
    // Assuming the refresh token is stored in a cookie called 'refreshToken'
    if (req.cookies['refreshToken']) {
        // Clear the refresh token cookie
        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            expires: new Date(0) // Set the cookie to expire immediately
        };
        res.cookie('refreshToken', '', cookieOptions);
    }

    // You can perform other session cleanup tasks here if needed

    logger.info('User logged out successfully');
    res.status(200).json({ message: "You have been logged out successfully" });
};
