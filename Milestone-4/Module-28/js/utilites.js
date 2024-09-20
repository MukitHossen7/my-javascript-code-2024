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
