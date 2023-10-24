const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: new Date()
})

module.exports = mongoose.model("Issue", issueSchema)