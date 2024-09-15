//Event Handler way:4
let pinkBtn = document.getElementById("pinkBtn");
pinkBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "pink";
});
//Event Handler way:5

document.getElementById("blueBtn").addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

document.getElementById("blueBtn").addEventListener("click", function () {
  document.getElementById("way5").style.color = "red";
  document.getElementById("way5").style.fontSize = "50px";
});
