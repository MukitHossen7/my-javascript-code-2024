//Only remove this text

// const items = document.getElementsByClassName("item");
// for (const item of items) {
//   item.addEventListener("click", function (event) {
//     event.target.parentNode.removeChild(event.target);
//   });
// }
document.getElementById("add-button").addEventListener("click", function () {
  let addText = document.getElementById("item-container");
  let li = document.createElement("li");
  li.classList.add("item");
  li.innerText = "Welcome to programming world";
  addText.appendChild(li);
});

// add value o remove hoba
document
  .getElementById("item-container")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
