//Event Handler way:1
function redEvent() {
  document.body.style.backgroundColor = "red";
}

// Event Handler way:2
let bgGreen = document.getElementById("bgGreen");
bgGreen.onclick = greenColor;
function greenColor() {
  document.body.style.backgroundColor = "green";
}
// Event Handler way:3
let bgYellow = document.getElementById("bgYellow");
bgYellow.onclick = function yellowColor() {
  document.body.style.backgroundColor = "yellow";
};
