const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User' // Reference to the user who posted the comment
  },
  issue: {
    type: Schema.Types.ObjectId,
    ref: 'Issue' // Reference to the issue the comment is related to
  }
})

module.exports = mongoose.model("Comment", commentSchema)