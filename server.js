// Dependencies
const express = require("express");
const routes = require("./routes/apiRoutes.js");

// Initialize express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
