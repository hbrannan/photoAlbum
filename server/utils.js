var db = require('../db/schemas.js');

module.exports = {
	addPhoto: function (req, cb){
		console.log('made it into addPhoto');
		console.log('addPhoto reqBod', req.body);
		//first parse the req
		//& build out an obj
		var photoPost = {
			image: req.body.form,
			name: 'test',
			description: 'test',
			rating: 0
		}

		//then insert into the db
		var newPhoto = new db.Photo ({});
		//then
		//if error, console.log('' , error)
		//else cb(result)
		//temporarily: : 
		cb(req.body);
	}
}