var express = require ('express');
var port = 3000;
var app = express();
//init the server

//set up endpoints: ASSUMES THAT YOU ARE STARTING FROM THE ROOT DIRECTORY (as defined by your
//execution of the node/nodemon cmd).. keep this in mind when u run the nodemon command
//run it rel 2 root to keep consistent!
app.use(express.static('client'));

app.get('/', function (req, res){
	res.render('index');
});

// ensure that the express server is listening
app.listen(port, function () {
	console.log('example app listening on port' + port);
})



//init the db
//get connected w da ORM