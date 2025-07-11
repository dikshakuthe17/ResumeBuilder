const User = require ('../models/User');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');

// Generate JWT token
const generateToken = UserId => {
  return jwt.sign ({id: UserId}, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

// @desc Register a new user
// @route POST /api/auth/register
// @access Public
const registerUser = async (req, res) => {
  try {
    const {username, email, password, profileImgUrl} = req.body;

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
      profileImgUrl,
    });

    //   Return user data with jwt token
    res.status (201).json ({
      _id: user._id,
      username: user.username,
      email: user.email,
      profileImgUrl: user.profileImgUrl,
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
const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;

    // Check if user exists
    const user = await User.findOne ({email});
    if (!user) {
      return res.status (400).json ({message: 'Invalid email  or password'});
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare (password, user.password);
    if (!isMatch) {
      return res.status (400).json ({message: 'Invalid email  or password'});
    }

    // Return user data with jwt token
    res.status (200).json ({
      _id: user._id,
      username: user.username,
      email: user.email,
      profileImgUrl: user.profileImgUrl,
      token: generateToken (user._id),
    });
    console.log ('User logged in successfully');
  } catch (error) {
    console.error ('Error logging in user:', error);
    res.status (500).json ({message: 'Server error'});
  }
};

// @desc Get user profile
// @route GET /api/auth/profile
// @access Private
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById (req.user.id).select ('-password');
    if (!user) {
      return res.status (404).json ({message: 'User not found'});
    }
    res.status (200).json (user);
  } catch (error) {
    console.error ('Error fetching user profile:', error);
    res.status (500).json ({message: 'Server error'});
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
