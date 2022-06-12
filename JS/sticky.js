// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    navbar.style.background = "#4e4c41";
    navbar.style.position = "fixed";
  } else {
    navbar.style.background = "none";
  }
}