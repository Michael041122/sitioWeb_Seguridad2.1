window.onscroll = function() {fixNavBar()};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function fixNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}