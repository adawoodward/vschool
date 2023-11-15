const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User' // Reference to the user who posted the comment
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post' // Reference to the issue the comment is related to
  },
  ratings: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Reference to the user who rated the review
    },
    value: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
  }]
})

module.exports = mongoose.model("Review", reviewSchema)