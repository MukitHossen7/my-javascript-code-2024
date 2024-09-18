document.getElementById("deleteBtn").addEventListener("click", function () {
  let inputFiled = document.getElementById("input-filed");
  let inputValue = inputFiled.value;
  if (inputValue.toLowerCase() === "delete") {
    let textInput = document.getElementById("text");
    textInput.style.visibility = "hidden";
  } else {
    document.getElementById("deleteBtn").setAttribute("disabled", true);
    let demo = document.getElementById("demo");
    demo.innerText = "Write you delete keyword";
    demo.style.color = "red";
    demo.style.fontSize = "11px";

    inputFiled.addEventListener("focus", function () {
      demo.style.visibility = "hidden";
      document.getElementById("deleteBtn").removeAttribute("disabled");
    });
  }

  inputFiled.value = "";
});
