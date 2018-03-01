
/*
 * GET happy1 page.
 */

var data = require('../data.json');


exports.view = function(req,res){
	console.log(data);
	res.render('sad1', data);
}

exports.post = function(req, res){
	
	var currentDate = new Date();
	
	var newPost = {
		"emote": "emotes/happy1",
		"mood": "delighted",
		"category": "happy",
		"positive": true,
		"date": "asdf", 
		"photoOn": false,
		"videoOn": false,
		"textOn": false,
		"photo": "",
		"video": "",
		"audio": "",
		"text": ""
	}

	posts.push(newPost);
	return;
};
