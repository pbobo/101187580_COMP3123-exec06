const mongoose = require("mongoose")
mongoose.Promise = global.Promise
mongoose.connect('')

const personSchema = mongoose.Schema({
    name: String,
    age: Number,
})

const Person = mongoose.model('Person',personSchema)