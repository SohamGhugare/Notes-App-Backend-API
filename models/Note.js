const mongoose = require('mongoose');

// Model Schema
const NoteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "No Description"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Notes", NoteSchema);