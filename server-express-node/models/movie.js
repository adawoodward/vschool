const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Movie Blueprint
const movieSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    releaseYear: Number
    // title: String,
    // genre: String,
})

module.exports = mongoose.model("Movie", movieSchema)