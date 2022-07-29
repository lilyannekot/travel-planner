// Dependencies
const express = require("express");
const routes = require("./routes");

// Initialize express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/')

app.listen(PORT, () => 
    console.log(`app listening at http://localhost:${PORT}`)
);