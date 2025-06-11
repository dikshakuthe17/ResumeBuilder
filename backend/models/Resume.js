// Import the mongoose library
const mongoose = require ('mongoose');

// Define the resume schema
const ResumeSchema = new mongoose.Schema (
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    template: {
      theme: String,
      colorPalette: [String],
    },
    thumbnailLink: {
      type: String,
    },
    profileInfo: {
      profilePreviewUrl:String,
      fullName:String,
      designation:String,
      summary:String,

    },
    contactInfo: {
        email: String,
        phone: String,
        location: String,
        linkedIn: String,
        github: String,
        website: String,
    },
    workExperience: [
      {
        company: String,
        role: String,
        startDate: Date,
        endDate: Date,
        description: String,
      },
    ],
    education: [
      {
        institution: String,
        degree: String,
        startDate: Date,
        endDate: Date,
      },
    ],
    skills: [
        {
            name: String,
            progress : Number,
        }
    ],
    projects: [
      {
        title: String,
        description: String,
        github: String,
        liveDemo: String,
      },
    ],
    certifications: [
      {
        name: String,
        issuer: String,
        year: Date,
        
      },
    ],

    languages: [
      {
        name: String,
        progress: Number, // e.g., 1 for "Beginner", 2 for "Intermediate", 3 for "Advanced"
      },
    ],
    interests: [String], // Array of strings for interests

  },

    {timestamps :{createdAt: "createdAt", updatedAt: "updatedAt"}}

);


// // Add a method to the schema to return a sanitized resume object
// resumeSchema.methods.toJSON = function () {
//   const resume = this;
//   const resumeObject = resume.toObject ();

//   // Remove sensitive fields if any
//   delete resumeObject.__v; // Remove version key if present

//   return resumeObject;
// };
// // Middleware to update the updatedAt field before saving
// resumeSchema.pre ('save', function (next) {
//   this.updatedAt = Date.now ();
//   next ();
// });

// // Create an index on userId for faster lookups
// resumeSchema.index (
//   {userId: 1}, // Index for userId
//   {unique: false} // Ensure userId is not unique, as a user can have multiple resumes
// );

// Create the Resume model using the resume schema
const Resume = mongoose.model ('Resume', ResumeSchema);
module.exports = Resume;


