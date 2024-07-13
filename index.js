// selecting side-nav-icon , side-nav, side-nav-close

var sidenavicon = document.getElementById("side-nav-icon");
var sidenav = document.getElementById("side-nav");
var sidenavclose = document.getElementById("side-nav-close");

sidenavicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});
sidenavclose.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});
