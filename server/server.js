var express = require ('express');
var bodyParser = require('body-parser');
var port = 8000;
var app = express();
var utils = require('./utils.js');

//set up endpoints: ASSUMES THAT YOU ARE STARTING FROM THE ROOT DIRECTORY (as defined by your
//execution of the node/nodemon cmd).. keep this in mind when u run the nodemon command
//run it rel 2 root to keep consistent!
app.use(express.static('client'));
//network tab has urlencoded and parsed. see if adds 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//serve up the homepage
app.get('/', function (req, res){
	res.render('index');
});

//return all of the photos on the server/ DB
app.get('/photos', function (req, res){
});

//insert a photo into the db
app.post('/photos', function (req, res){
	//insert into db
	console.log('reached post!', req.body);
	utils.addPhoto(req, res.send);
	//by calling a utility function! 	
	// res.send(req.body);
});
// ensure that the express server is listening
app.listen(port, function () {
	console.log('example app listening on port ' + port);
});

module.exports.port = port;