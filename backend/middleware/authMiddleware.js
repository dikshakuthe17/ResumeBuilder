const jwt = require ('jsonwebtoken');
const User = require ('../models/User');

// Middleware to protect routes
const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token.startsWith ('Bearer ')) {
      token = token.split (' ')[1];
      const decoded = jwt.verify (token, process.env.JWT_SECRET);

      // Find user by ID from the token
      const user = await User.findById (decoded.id).select ('-password');
      if (!user) {
        return res.status (401).json ({message: 'User not found'});
      }
      req.user = user;
      next ();
    } else {
      res.status (401).json ({message: 'No token, authorization denied'});
    }
  } catch (error) {
    res.status (401).json ({message: 'Token failed'});
    console.error (error);
  }
};

module.exports = {protect};
