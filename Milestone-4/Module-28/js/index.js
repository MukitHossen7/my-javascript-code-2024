//Add Money

document
  .getElementById("add-input-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addAmountValue = getInputValueById("add-input-amount");
    const addPinValue = getInputValueById("add-input-pin");
    const amount = getTextValueById("amount");
    if (addPinValue === 1234) {
      let addAmount = amount + addAmountValue;
      document.getElementById("amount").innerText = addAmount;
    } else {
      alert("Invalid pin!");
    }
  });

//Cash Out Money
document
  .getElementById("cashOut-input-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmountValue = getInputValueById("cashOut-input-amount");
    const cashOutPinValue = getInputValueById("cashOut-input-pin");
    const amount = getTextValueById("amount");
    if (cashOutPinValue === 1234) {
      let cashOutAmount = amount - cashOutAmountValue;
      document.getElementById("amount").innerText = cashOutAmount;
    } else {
      alert("Invalid pin!");
    }
    console.log(cashOutAmountValue, cashOutPinValue);
  });
