//require mongoose
const mongoose = require('mongoose')
const {Schema} = mongoose
const Bread = require('./bread')

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
}, {toJSON: { virtuals: true}})

//Virtuals
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})


//model + export module
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker