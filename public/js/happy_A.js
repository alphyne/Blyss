// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the top navbar
var navbartop = document.getElementById("navbartop");

// Get the offset position of the top navbar
var stickytop = navbartop.offsetTop;

// Get the bottom navbar
var navbarbot = document.getElementById("navbarbot");

// Get the offset position of the bottom navbar
var stickybot = navbartop.offsetTop;

var windowHeight = $(window).height();
var botOffset = windowHeight - 48;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > stickytop) {
    navbartop.classList.add("stickytop")
  } else {
    navbartop.classList.remove("stickytop");
  }

  if (botOffset > stickybot) {
    navbarbot.classList.add("stickybot")
  } else {
    navbarbot.classList.remove("stickybot");
  }
}

function openCity(cityName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentA");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablinkA");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
