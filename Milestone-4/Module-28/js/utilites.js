function getInputValueById(id) {
  let inputValue = document.getElementById(id).value;
  let inputNumber = parseFloat(inputValue);
  return inputNumber;
}
function getTextValueById(id) {
  let amountValue = document.getElementById(id).innerText;
  let amountNum = parseFloat(amountValue);
  return amountNum;
}
function showSectionInClick(id) {
  document.getElementById("add-form").classList.add("hidden");
  document.getElementById("out-form").classList.add("hidden");
  document.getElementById("history-container").classList.add("hidden");

  // show section
  document.getElementById(id).classList.remove("hidden");
}
