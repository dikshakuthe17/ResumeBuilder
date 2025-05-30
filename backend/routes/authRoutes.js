const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const {protect} = require ('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware'); // Assuming you have a middleware for handling file uploads

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);

// post method for upload image
router.post ('/upload-image', upload.single ('image'), (req, res) => {
  if (!req.file) {
    return res.status (400).json ({message: 'No file uploaded'});
  }
  const imageUrl = `${req.protocol}://${req.get ('host')}/uploads/${req.file.filename}`;
  res.status (200).json ({message: 'Image uploaded successfully', imageUrl});
});


module.exports = router;
