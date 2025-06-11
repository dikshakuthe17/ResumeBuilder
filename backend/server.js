require ('dotenv').config ();
const express = require ('express');
const cors = require ('cors');
const path = require ('path');

const connectDB = require ('./config/db');

const app = express ();
// Middleware to serve static files
app.use (express.static (path.join (__dirname, 'public')));
// Middleware to handle CORS


app.use (
  cors ({
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Database connection
connectDB ();

// middleware
app.use (express.json ());


// auth Routes
const authRoutes = require ('./routes/authRoutes');
app.use ('/api/auth', authRoutes);

// resume Routes
const resumeRoutes = require ('./routes/resumeRoutes');
app.use ('/api/resume', resumeRoutes);

// Server uploads folder
app.use ('/uploads', express.static (path.join (__dirname, 'uploads')
,{
  setHeaders: (res, path) => {
    res.set ('Access-Control-Allow-Origin', 'http://localhost:5173'); // Allow CORS for uploads
  },
}));


// Start server
const PORT = process.env.PORT || 5000;
app.listen (PORT, () => {
  console.log (`Server is running on port ${PORT}`);
});
