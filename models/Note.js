const mongoose = require('mongoose');

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
    },
    owner: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Notes", NoteSchema);