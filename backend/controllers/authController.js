const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Generate JWT token
const generateToken = (UserId) => {
    return jwt.sign({ id: UserId }, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });
};

// @desc Register a new user
// @route POST /api/auth/register
// @access Public
const registerUser = async (req, res) => {
  try {
    const {username, email, password, profileImageUrl} = req.body;

    // Check if user already exists
    const existingUser = await User.findOne ({email});
    if (existingUser) {
      return res.status (400).json ({message: 'User already exists'});
    }

    // Hash password
    const salt = await bcrypt.genSalt (10);
    const hashedPassword = await bcrypt.hash (password, salt);

    // Create user
    const user = await User.create ({
      username,
      email,
      password: hashedPassword,
      profileImageUrl,
    });

    //   Return user data with jwt token
    res.status (201).json ({
      _id: user._id,
      username: user.username,
      email: user.email,
      profileImageUrl: user.profileImageUrl,
      token: generateToken (user._id),
    });
  } catch (error) {
    console.error ('Error registering user:', error);
    res.status (500).json ({message: 'Server error'});
  }
};


// @desc Login a user
// @route POST /api/auth/login
// @access Public
const loginUser = async (req, res) => {}

// @desc Get user profile
// @route GET /api/auth/profile 
// @access Private
const getUserProfile = async (req, res) => {}


module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
  };
 