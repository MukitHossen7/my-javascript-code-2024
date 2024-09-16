document.getElementById("btn-delete").addEventListener("click", function () {
  let inputField = document.getElementById("input-field");
  let inputValue = inputField.value;
  if (inputValue.toLowerCase() === "delete") {
    document.getElementById("del-text").style.visibility = "hidden";
  }
  inputField.value = "";
  //   document.getElementById("del-text").style.visibility = "hidden";
});

document
  .getElementById("input-field")
  .addEventListener("keyup", function (event) {
    let deleteBtn = document.getElementById("btn-delete");
    let inputValue = event.target.value;
    if (inputValue.toLowerCase() === "delete") {
      deleteBtn.removeAttribute("disabled");
    } else {
      deleteBtn.setAttribute("disabled", "true");
    }
  });
