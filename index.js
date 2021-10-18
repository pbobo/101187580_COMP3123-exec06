// Prendi Bobo | 101187580 
let express = require('express')
let mongoose = require('mongoose');
// importing
let NoteModel = require('./models/Note');
// get current date
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let app = express()


// mongodb+srv://dbprendi:keyboy100@cluster0.rnmdb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// basic connect
mongoose.connect('mongodb+srv://dbprendi:keyboy100@cluster0.rnmdb.mongodb.net/db_f2021_comp3123?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get("/", (req, res) => {
    res.send("<h1>MongoDB mongoos Example</h1>")
})

// Inserting New Note
app.get("/add", async (req,res) => {
    
    let s = {
        noteTitle: "To Do List",
        noteDescription: "In detail of to do list",
        priority: "HIGH",
        dateAdded: `${date}`,
        dateUpdated: `${date}`
    }

    // Create note model object
    let new_note = new NoteModel(s)

    try{
        await new_note.save(s)
        console.log("Student Record Saved")
        res.status(200).send("Note added")
    }catch(err){
        res.status(500).send(err)
    }
})

// fetch/read notes
app.get("/notes", async (req,res) => {
    const s = await NoteModel.find({})
    try{
        res.send(s)
    }catch(err){
        console.log("Error: "+err)
        res.status(500).send(err)
    }
})

//fetch single note with noteTitle
app.get("/notes2", async (req,res) => {
    const s = await NoteModel.find({}, "noteTitle")


    //specific condition
    //const s = await NoteModel.find({total : 100}, "noteTitle")
    // sort by asc / dec
    //const s = await NoteModel.find({}, "noteTitle").sort({total: -1})

    try{
        res.send(s)
    }catch(err){
        console.log("Error: "+err)
        res.status(500).send(err)
    }
})

app.listen(8084, () => {
    console.log("Server running at http://localhost:8084/")
})
