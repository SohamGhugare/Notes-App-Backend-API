const express = require('express');
const router = express.Router();

// Importing models
const Note = require('../models/Note');

// Getting all notes
router.get('/', async(req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (err) {
        res.json({ message: err })
    }
});

// Get a specific note
router.get('/:id', async(req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        res.json(note);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete a specific note
router.delete('/:id', async(req, res) => {
    try {
        const deleted = await Note.deleteOne({ _id: req.params.id });
        res.json({ message: "Deleted Successfully!" })
    } catch (err) {
        res.json({ message: err })
    }
});

// Update a specific note
router.patch('/:id', async(req, res) => {
    try {
        const updated = await Note.updateOne({ _id: req.params.id }, {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        });
        res.json({ message: "Successfully updated the note!" });

    } catch (err) {
        res.json({ message: err })
    }
});

// Posting a new note
router.post('/', async(req, res) => {
    const note = new Note({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (err) {
        res.json({ message: err });
    }

});

module.exports = router;