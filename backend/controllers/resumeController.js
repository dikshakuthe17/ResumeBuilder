const fs = require ('fs');
const path = require ('path');
const Resume = require ('../models/Resume');

// @desc Create a new resume
// @route POST /api/resume
// @access Private
const createResume = async (req, res) => {
  try {
    const {title} = req.body;

    // default template
    const defaultResumeData = {
      profileInfo: {
        profileImage: 'null',
        previewUrl: '',
        fullName: '',
        designation: '',
        summary: '',
      },
      contactInfo: {
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        github: '',
        website: '',
      },
      workExperience: [
        {
          company: '',
          role: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
      education: [
        {
          degree: '',
          institution: '',
          startDate: '',
          endDate: '',
        },
      ],
      skills: [
        {
          name: '',
          progress: 0,
        },
      ],
      projects: [
        {
          title: '',
          description: '',
          github: '',
          liveDemo: '',
        },
      ],
      certifications: [
        {
          name: '',
          issuer: '',
          year: '',
        },
      ],
      languages: [
        {
          name: '',
          progress: 0,
        },
      ],
      interests: [''],
    };

    const newResume = await Resume.create ({
      userId: req.user._id,
      title,
      ...defaultResumeData,
    });
    console.log ('New resume created');
    res.status (201).json (newResume);
  } catch (error) {
    res
      .status (500)
      .json ({message: 'failed to create resume', error: error.message});
  }
};

// @desc Get all resumes for the logged-in user
// @route GET /api/resume
// @access Private
const getUserResumes = async (req, res) => {
  try {
    const resumes = await Resume.find ({userId: req.user._id}).sort ({
      updatedAt: -1,
    });
    console.log ('User resumes fetched');
    res.status (200).json (resumes);
  } catch (error) {
    res.status (500).json ({message: 'Server error'});
  }
};

// @desc Get a specific resume by ID
// @route GET /api/resume/:id
// @access Private
const getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findOne ({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }
    console.log('Resume fetched by ID');
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
// @desc Update a resume
// @route PUT /api/resume/:id
// @access Private
const updateResume = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const resume = await Resume.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      updatedData,
      { new: true }
    );

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    console.log('Resume updated');
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }

};
// @desc Delete a resume
// @route DELETE /api/resume/:id
// @access Private
const deleteResume = async (req, res) => {
  try {
    const { id } = req.params;

    const resume = await Resume.findOneAndDelete({
      _id: id,
      userId: req.user._id,
    });

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }
    

    // Optionally, delete the associated profile image if it exists
    if (resume.profileInfo.profileImage && resume.profileInfo.profileImage !== 'null') {
      const imagePath = path.join(__dirname, '../uploads', resume.profileInfo.profileImage);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    console.log('Resume deleted successfully');
    res.status(200).json({ message: 'Resume deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }

};

module.exports = {
  createResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume,
};
