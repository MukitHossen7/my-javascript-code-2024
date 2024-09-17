let html = document.getElementById("html");
html.setAttribute("data-theme", "light");

document.getElementById("commitBtn").addEventListener("click", function () {
  let textField = document.getElementById("text-field");
  let textArea = document.getElementById("textArea");
  let textValue = textField.value;
  let p = document.createElement("p");
  p.innerText = textValue;
  textArea.appendChild(p);
  textField.value = "";
});
