const jwt = require ('jsonwebtoken');
const User = require ('../models/User');

// Middleware to protect routes

const protect = async (req, res, next) => {
  try {
    // Get token from headers
    const token = req.headers.authorization;

    if (token && token.startsWith ('Bearer ')) {
      // Remove 'Bearer ' prefix
      token = token.split (' ')[1];
      // Verify token
      const decoded = jwt.verify (token, process.env.JWT_SECRET);

      // Find user by ID
      req.user = await User.findById (decoded.id).select ('-password');
      next ();
    } else {
      res.status (401).json ({message: 'Not authorized, no token'});
    }
  } catch (error) {
    res.status (401).json ({message: 'Not authorized, token failed'});
    console.error ('Error in protect middleware:', error);
  }
};

module.exports = {protect};
