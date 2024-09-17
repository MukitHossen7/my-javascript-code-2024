let data = document.getElementById("html");
data.setAttribute("data-theme", "light");

document.getElementById("updateBtn").addEventListener("click", function () {
  let inputFiled = document.getElementById("input-filed");
  let inputValue = inputFiled.value;
  document.getElementById("updateText").innerText = inputValue;
  inputFiled.value = "";
});
