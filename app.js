const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();
const port = 3000

// CORS
app.use(cors());

// Importing the routes
const notesRoute = require('./routes/notes');

// Using bodyParser to parse the data into json
app.use(bodyParser.json());

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