// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the top navbar
var navbartop = document.getElementById("navbartop");

// Get the offset position of the top navbar
var stickytop = navbartop.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > stickytop) {
    navbartop.classList.add("stickytop")
  } else {
    navbartop.classList.remove("stickytop");
  }
}

$('input:button').click(function(){
	alert($(this.val());
});
