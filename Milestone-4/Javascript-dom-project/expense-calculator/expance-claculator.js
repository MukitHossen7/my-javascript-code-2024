let html = document.getElementById("html");
html.setAttribute("data-theme", "light");

let inputSpan = document.getElementById("inputSpan");
document.getElementById("insertBtn").addEventListener("click", function () {
  let expance = document.getElementById("expance");
  let amount = document.getElementById("amount");
  let expanceValue = expance.value;
  let amountValue = Number(amount.value);
  let inputValue = Number(inputSpan.innerText);
  inputSpan.innerText = inputValue + amountValue;
  let showCost = document.getElementById("showCost");
  showCost.innerHTML += `
  <div class="flex justify-around mt-3">
          <p>${expanceValue}</p>
          <p>${amountValue}</p>
        </div>
   `;
  expance.value = "";
  amount.value = "";
});
