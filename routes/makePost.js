
/*
 * GET makePost page.
 */

var data = require('../data.json');


exports.view = function(req,res){
	console.log(data);
	res.render('makePost', data);
}
/*
exports.save = function(req, res){
	
	var currentDate = new Date();
	
	var emotePath = "emotes/" + req.query["emote"];

	var category = req.query["category"];

	if( category == happy || category == loving ||
		category == relaxed ){
		var positive = true;
	}

	else{
		var positive = false;
	}

	var newPost = {
		"emote": emotePath,
		"mood": req.query["mood"],
		"category": category,
		"positive": positive,
		"date": currentDate, 
		"photoOn": false,
		"videoOn": false,
		"textOn": false,
		"photo": "",
		"video": "",
		"audio": "",
		"text": ""
	}
*/
/*	var newPost = {
		"emote": "emotes/relaxed2",
		"mood": "content",
		"category": "relaxed",
		"positive": true,
		"date": "11am on February 23", 
		"photoOn": false,
		"videoOn": false,
		"textOn": false,
		"photo": "",
		"video": "",
		"audio": "",
		"text": ""
	};

	data.posts.push(newPost);
	return;
};*/
