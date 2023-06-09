const mongoose = require('mongoose')
const Schema = mongoose.Schema


// { firstName: "Boba", lastName: "Fett", living: true, bountyAmount: 350, type: "Sith", _id: uuidv4() },

const bountySchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    living: {
        type: Boolean,
        require: true
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

module.exports = mongoose.model("Bounty", bountySchema)