const multer = require('multer');

// configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  }
});

// file filter
const fileFilter = (req, file, cb) =>{
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg' , 'image/gif']; // Allowed file types
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // Accept the file
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, JPG, and GIF are allowed.'), false); // Reject the file
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;

