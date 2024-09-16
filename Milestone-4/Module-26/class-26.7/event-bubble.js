document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item-2 is clicked");
  //   event.stopPropagation();
  event.stopImmediatePropagation();
});
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item-2 two is clicked");
});
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item-2 three is clicked");
});
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item-2 four is clicked");
});

document.getElementById("ul-container").addEventListener("click", function () {
  console.log("ul container is working");
});
document
  .getElementById("section-container")
  .addEventListener("click", function () {
    console.log("section container is working");
  });

document
  .getElementById("main-container")
  .addEventListener("click", function () {
    console.log("main container is working");
  });
document
  .getElementById("body-container")
  .addEventListener("click", function () {
    console.log("body container is working");
  });
