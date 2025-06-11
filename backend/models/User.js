const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema (
  {
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
     
    },
    profileImageUrl: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    
  }
);

// Define the model
const User = mongoose.model ('User', userSchema);

// Export the model
module.exports = User;
