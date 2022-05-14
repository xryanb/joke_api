const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup:{ 
	type: String,
	required:[true,'joke is required'],
	minlength:[6,'must be six characters long']
	},
	punchline:{
	type: String,
	required:[true,'punchline is required!'],
	minlength:[6,'must be 6 characters long!']
	}
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;