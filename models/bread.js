//require mongoose
const mongoose = require('mongoose')
//creating shorthand for Schema constructor
const {Schema} = mongoose


//Schema
const breadSchema = new Schema({
	name: { type: String, required: true },
	hasGluten: { type: Boolean },
	image: { type: String, default: 'http://placehold.it/500x500.png' },
	baker: {
		type: Schema.Types.ObjectID,
		ref: 'Baker'
	}
})

//helper function
breadSchema.methods.getBakedBy = function(){
	return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
  }

//Model & Export

const Bread = mongoose.model('Bread', breadSchema) 

//This is the model which we save our variable to.
//mongoose.model is a method that creates a model based on passed arguments
//Bread (argument) is the name of the collection which the model will be connected to. Capitalized, singular.
//breadSchema(argument) this is the schema that the model should use defined above

//exports this module
module.exports = Bread