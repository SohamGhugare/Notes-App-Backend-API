const express = require('express');
const router = express.Router();

// Importing models
const Note = require('../models/Note');

router.get('/', (req, res) => {
    res.send("This is notes page");
});


module.exports = router;