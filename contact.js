// selecting contactus-side-nav-icon , side-nav, side-nav-close

var contactussidenavicon = document.getElementById("contactus-side-nav-icon");
var sidenav = document.getElementById("side-nav");
var sidenavclose = document.getElementById("side-nav-close");

contactussidenavicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});
sidenavclose.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});
