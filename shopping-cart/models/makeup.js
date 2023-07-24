const mongoose = require('mongoose')
const Schema = mongoose.Schema

const makeupSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    category: {
        type: String,
        enum: ['eye', 'lip', 'face', 'cheeks', 'tools'],
        require: true 
    }
})

module.exports = mongoose.model("Makeup", makeupSchema)