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
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Database connection
connectDB ();

// middleware
app.use (express.json ());


// Routes
const authRoutes = require ('./routes/authRoutes');
app.use ('/api/auth', authRoutes);



// Start server
const PORT = process.env.PORT || 5000;
app.listen (PORT, () => {
  console.log (`Server is running on port ${PORT}`);
});
