const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    title: {
        type: String,
        require: true
    },
    category: {
        type: String,
        enum: ['tops', 'bottoms', 'shoes', 'bags', 'jackets', 'accessories'],
        require: true    
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)