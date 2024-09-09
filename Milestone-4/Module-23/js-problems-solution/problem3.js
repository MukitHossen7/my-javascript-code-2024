/*  
### Task-3: 
Your task is to calculate the `total budget` required to buy electronics:

        laptop = 35000 tk
        tablet = 15000 tk
        mobile = 20000 tk

Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.

*/

function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity
) {
  let laptop = 35000 * laptopQuantity;
  let tablet = 15000 * tabletQuantity;
  let mobile = 20000 * mobileQuantity;

  let totalPrice = laptop + tablet + mobile;
  return "Total money " + totalPrice + " taka";
}

console.log(calculateElectronicsBudget(1, 1, 2));
