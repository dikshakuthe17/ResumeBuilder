require ("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN || "http://localhost:3000",
        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }
));

// middleware
app.use(express.json());

// Start server
const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
