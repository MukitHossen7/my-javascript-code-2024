//Add Money

document
  .getElementById("add-input-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addAmountValue = getInputValueById("add-input-amount");
    const addPinValue = getInputValueById("add-input-pin");
    const amount = getTextValueById("amount");
    if (isNaN(addAmountValue)) {
      alert("Invalid Amount");
      return;
    }
    if (addPinValue === 1234) {
      let addAmount = amount + addAmountValue;
      document.getElementById("amount").innerText = addAmount;

      let p = document.createElement("p");
      p.innerText = `Add money: ${addAmountValue} Tk. Total amount is ${addAmount} Tk.`;
      document.getElementById("history-section").appendChild(p);
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
    if (isNaN(cashOutAmountValue)) {
      alert("Invalid Amount");
      return;
    }
    const amount = getTextValueById("amount");
    if (cashOutAmountValue > amount) {
      alert("Not enough balance!");
      return;
    }
    if (cashOutPinValue === 1234) {
      let cashOutAmount = amount - cashOutAmountValue;
      document.getElementById("amount").innerText = cashOutAmount;

      let div = document.createElement("div");

      div.innerHTML = `
         <div class="bg-red-200 rounded-md p-2">
                  <h2 class='text-xl font-bold'>Cash Out: ${cashOutAmountValue} TK</h2>
                  <p class='font-medium'>Current Balance : ${cashOutAmount} TK</p>
          </div>
      `;
      document.getElementById("history-section").appendChild(div);
    } else {
      alert("Invalid pin!");
    }
    console.log(cashOutAmountValue, cashOutPinValue);
  });

//Toggle Button
document
  .getElementById("addShowBtnFrom")
  .addEventListener("click", function () {
    showSectionInClick("add-form");
  });
document
  .getElementById("outShowBtnFrom")
  .addEventListener("click", function () {
    showSectionInClick("out-form");
  });
document
  .getElementById("transactionsShowBtn")
  .addEventListener("click", function () {
    showSectionInClick("history-container");
  });
