/*
 * File: addPost.js
 * Description: Javascript for submit post pages.
 */

function post(){

	$.post('/happy1-post', function(data){
	});

	window.location.href="/home";
}

var main = function () {
	$('.submit-button').click(function() {
		post();	

	});

}
