const fs = require ('fs');
const path = require ('path');
const Resume = require ('../models/Resume');
const upload = require ('../middleware/uploadMiddleware'); // Assuming you have a middleware for file uploads

// @desc Upload resume images
// @route PUT /api/resume/:id/upload-images
// @access Private
const uploadResumeImages = async (req, res) => {
  try {
    const {id} = req.params;

    // Find the resume by ID
    const resume = await Resume.findOne ({_id: id, userId: req.user._id});
    if (!resume) {
      return res.status (404).json ({message: 'Resume not found'});
    }

    // Delete old images if new images are uploaded
    if (req.files && req.files.length > 0) {
      resume.images.forEach (imagePath => {
        const fullPath = path.join (__dirname, '../', imagePath);
        if (fs.existsSync (fullPath)) {
          fs.unlinkSync (fullPath);
        }
      });
      resume.images = []; // Clear old images

      // Save new image paths to the resume
      const imagePaths = req.files.map (file => file.path);
      resume.images.push (...imagePaths);
      await resume.save ();

      console.log ('Resume images uploaded');
      return res.status (200).json (resume);
    } else {
      return res.status (400).json ({message: 'No images uploaded'});
    }
  } catch (error) {
    res.status (500).json ({message: 'Server error', error: error.message});
  }
};

module.exports = {
  uploadResumeImages,
};
