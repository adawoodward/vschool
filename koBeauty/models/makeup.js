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
        enum: ['Face', 'Eyes', 'Lips', 'Cheeks', 'Makeup-tools']
    }
})

module.exports = mongoose.model("Makeup", makeupSchema)