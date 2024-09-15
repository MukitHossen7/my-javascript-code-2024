//Task :1
function onClickFunction() {
  document.getElementById("defultText").innerText =
    "Welcome to Programming world !";
  document.getElementById("defultText").style.color = "red";
  document.getElementById("defultText").style.fontSize = "30px";
}
//Task :2
document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("defultText").innerText = "Welcome to new Bangladesh";
  document.getElementById("defultText").style.color = "green";
  document.getElementById("defultText").style.fontSize = "30px";
});

//Task :3
document.getElementById("updateBtn").addEventListener("click", function () {
  let inputText = document.getElementById("inputText");
  let inputValue = inputText.value;
  document.getElementById("demo").innerText = inputValue;
  document.getElementById("demo").style.color = "tomato";
  document.getElementById("demo").style.fontSize = "20px";
  document.getElementById("demo").style.fontWeight = "bold";
  inputText.value = "";
});

// Task :4
document.getElementById("sumBtn").addEventListener("click", function () {
  let num1 = document.getElementById("num1");
  let num1Value = num1.value;
  let num2 = document.getElementById("num2");
  let num2Value = num2.value;
  let sumNum = Number(num1Value) + Number(num2Value);
  document.getElementById("sumDemo").innerText = sumNum;
  document.getElementById("sumDemo").style.fontWeight = "bold";
  document.getElementById("sumDemo").style.fontSize = "20px";
  num1.value = "";
  num2.value = "";
});
