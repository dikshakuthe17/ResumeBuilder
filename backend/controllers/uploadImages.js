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

    // Handle thumbnail
    let thumbnailLink = resume.thumbnailLink || '';
    if (req.files && req.files.thumbnail && req.files.thumbnail[0]) {
      // Optionally delete old thumbnail file here if needed
      thumbnailLink = req.files.thumbnail[0].path;
      resume.thumbnailLink = thumbnailLink;
    }

    // Handle profileImg
    let profilePreviewUrl = resume.profileInfo?.profilePreviewUrl || '';
    if (req.files && req.files.profileImg && req.files.profileImg[0]) {
      // Optionally delete old profile image file here if needed
      profilePreviewUrl = req.files.profileImg[0].path;
      resume.profileInfo.profilePreviewUrl = profilePreviewUrl;
    }

    await resume.save();

    res.status(200).json({
      thumbnailLink,
      profilePreviewUrl
    });
  } catch (error) {
    res.status (500).json ({message: 'Server error', error: error.message});
  }
};

module.exports = {
  uploadResumeImages,
};
