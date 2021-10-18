const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: String,
    dateAdded: String,
    dateUpdated: String,
})

let Note = mongoose.model("note", NoteSchema)
module.exports = Note

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated