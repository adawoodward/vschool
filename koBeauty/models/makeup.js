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
        require: true,
        enum: ['Eyes', 'Lips', 'Cheeks', 'Makeup-tools']
    },
    bountyAmount: {
        type: Number,
        require: true
    },
    type: {
        type: String,
        enum: ['Sith', 'Jedi'],
        require: true
    }
})

module.exports = mongoose.model("Makeup", makeupSchema)