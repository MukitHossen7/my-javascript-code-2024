//way :1
// document.getElementById("btn").addEventListener("mouseenter", function () {
//   console.log("mouse is enter");
// });
//way :2
// document.getElementById("btn").addEventListener("mouseleave", function () {
//   console.log("mouse is leave");
// });
//way :3
// document.getElementById("input-field").addEventListener("focus", function () {
//   console.log("you focus input filed");
// });
//way :4
// document.getElementById("input-field").addEventListener("blur", function () {
//   console.log("you blur input filed");
// });
//way :5
// document.getElementById("btn").addEventListener("mousemove", function () {
//   console.log("you mouse move in this time");
// });
//way :5
// document
//   .getElementById("input-field")
//   .addEventListener("keydown", function (event) {
//     console.log("you key down in this time");
//     console.log(event.target.value);
//   });
//way :6
// document
//   .getElementById("input-field")
//   .addEventListener("keypress", function (event) {
//     console.log(event.target.value);
//     console.log("you keypress in this time");
//   });
// //way :7
document
  .getElementById("input-field")
  .addEventListener("keyup", function (event) {
    console.log(event.target.value);
    console.log("you keyup in this time");
  });
