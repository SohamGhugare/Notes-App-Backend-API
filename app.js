const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
const port = 3000

// Importing the routes
const notesRoute = require('./routes/notes');

// Creating notes middleware
app.use("/notes", notesRoute);

app.get('/', (req, res) => {
    res.send("Home Page");
});

// Connecting to DB
mongoose.connect(
    process.env.DB_SECRET, { useNewUrlParser: true },
    () => { console.log("Connected to DB!") }
);

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});