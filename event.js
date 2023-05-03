
var img = document.querySelector('img');

var imgLog = function() {
  console.log("You moused over Mega Man!");
}

img.addEventListener('mouseover', imgLog);
var div = document.querySelector("div");

var logText = function() {
  console.log(this.textContent);
}

div.addEventListener("click", logText);


