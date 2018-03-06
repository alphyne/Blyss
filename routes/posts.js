
/*
 * GET happy page.
 */

var data = require('../data.json');

exports.view = function(req, res){
  	data.viewAlt = false;
	console.log(data);
	res.render('posts',data);
};

exports.viewAlt = function(req, res){
	data.viewAlt = true;
	console.log(data);
	res.render('posts',data);
};
