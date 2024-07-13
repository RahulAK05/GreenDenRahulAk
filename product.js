// selecting side-nav-icon , side-nav, side-nav-close

var productssidenavicon = document.getElementById("products-side-nav-icon");
var sidenav = document.getElementById("side-nav");
var sidenavclose = document.getElementById("side-nav-close");

productssidenavicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});
sidenavclose.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});

// Search functionality

var plantcontainer = document.getElementById("plant-container");
var search = document.getElementById("search");
var plantlist = plantcontainer.querySelectorAll("div");

search.addEventListener("keyup", function () {
  var searchinput = event.target.value.toUpperCase();

  for (count = 0; count < plantlist.length; count = count + 1) {
    var plantname = plantlist[count].querySelector("h1").textContent;
    if (plantname.toUpperCase().indexOf(searchinput) < 0) {
      plantlist[count].style.display = "none";
    } else {
      plantlist[count].style.display = "block";
    }
  }
});
