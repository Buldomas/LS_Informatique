var btmenu1 = document.getElementById("collapseOne");
var btmenu2 = document.getElementById("collapseTwo");
var btmenu3 = document.getElementById("collapseThree");
var btmenu4 = document.getElementById("collapseFour");

var monBouton = document.getElementById("btn1");
monBouton.addEventListener("click", function () {
  //btmenu1.style.display = "block";
  //btmenu2.style.display = "none";
  //btmenu3.style.display = "none";
  //btmenu4.style.display = "none";

  btmenu1.style.height = "auto";
  btmenu2.style.height = "0";
  btmenu3.style.height = "0";
  btmenu4.style.height = "0";
});
var monBouton = document.getElementById("btn2");
monBouton.addEventListener("click", function () {
  //btmenu1.style.display = "none";
  //btmenu2.style.display = "block";
  //btmenu3.style.display = "none";
  //btmenu4.style.display = "none";
  btmenu1.style.height = "0";
  btmenu2.style.height = "auto";
  btmenu3.style.height = "0";
  btmenu4.style.height = "0";

});
var monBouton = document.getElementById("btn3");
monBouton.addEventListener("click", function () {
  //btmenu1.style.display = "none";
  //btmenu2.style.display = "none";
  //btmenu3.style.display = "block";
  //btmenu4.style.display = "none";
  btmenu1.style.height = "0";
  btmenu2.style.height = "0";
  btmenu3.style.height = "auto";
  btmenu4.style.height = "0";
});
var monBouton = document.getElementById("btn4");
monBouton.addEventListener("click", function () {
  //btmenu1.style.display = "none";
  //btmenu2.style.display = "none";
  //btmenu3.style.display = "none";
  //btmenu4.style.display = "block";
  btmenu1.style.height = "0";
  btmenu2.style.height = "0";
  btmenu3.style.height = "0";
  btmenu4.style.height = "auto";
});
