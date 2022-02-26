//require mongoose
const mongoose = require('mongoose')
const {Schema} = mongoose

//define new schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Ravel', 'Paul', 'Tommy', 'Janet', 'Ted', 'Sam']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: {
        type: String
    }
})

//model + export module
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker