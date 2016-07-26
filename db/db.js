//use mongoose
var mongod = require('mongodb');
var mongoose = require('mongoose');
var server = require('../server/server.js');


//CONNECT
mongoose.connect('mongodb://localhost/photoApp');


//CHECK THE CONNECTION
var mg = mongoose.connection;
mg.on('error', console.error.bind(console, 'connection error'));
mg.once('open', function (){
	console.log('mongoose connected!');
});


//DEFINE SCHEMAS ON SAME PAGE SO AS TO SEE
var photoSchema = mongoose.Schema({
	image: String,
	name: String,
	description: String,
	rating: Number
});

module.exports = {
	mg:mg, 
	photoSchema:photoSchema
};
/*
TO SET UP MONGO: 
--mongo shell to use, inquire into your db

--run mongod --dbpath :path to data:
  /Users/hannah/Desktop/caboose/Photo Album Project/db/data
*/

//set up the schemas
//probably in separate file! 