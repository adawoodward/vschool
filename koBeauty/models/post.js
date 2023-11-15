const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true,
        enum: ['Face', 'Eyes', 'Lips', 'Cheeks', 'Makeup-tools']
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likedUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikedUsers:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})

module.exports = mongoose.model("Post", postSchema)
