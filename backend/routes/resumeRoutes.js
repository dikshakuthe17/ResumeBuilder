const express = require ('express');
const {
  createResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume,
} = require ('../controllers/resumeController');
const {protect} = require ('../middleware/authMiddleware');
const {uploadResumeImages} = require('../controllers/uploadImages');
const router = express.Router ();

const upload = require('../middleware/uploadMiddleware');
// Route to create a new resume
router.post ('/', protect, createResume);

// Route to get a specific resume by ID
router.get ('/:id', protect, getResumeById);

// Router to get user's resumes
router.get ('/', protect, getUserResumes);

// Route to update a resume
router.put ('/:id', protect, updateResume);

// Route to delete a resume
router.delete ('/:id', protect, deleteResume);

// Route to update resume images
router.put(
  '/:id/upload-images',
  protect,
  upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'profileImg', maxCount: 1 }
  ]),
  uploadResumeImages
);
module.exports = router;
