function woodCalculate(chairQuentity, tableQuentity, badQuentity) {
  const badWood = 50;
  const chairWood = 20;
  const tableWood = 30;

  let totalBadWood = badQuentity * badWood;
  let totalChairWood = chairQuentity * chairWood;
  let totalTableWood = tableQuentity * tableWood;

  let totalWood = totalBadWood + totalChairWood + totalTableWood;
  return totalWood + " Cft";
}
console.log(woodCalculate(8, 0, 0));
console.log(woodCalculate(8, 2, 0));

function shirtTaka(shirtQuantity, showsQuantity, goglesQuantity) {
  const shirt = 500;
  const shows = 1500;
  const gogles = 200;
  let shirtPrice = shirt * shirtQuantity;
  let showsPrice = shows * showsQuantity;
  let goglesPrice = gogles * goglesQuantity;

  let totalPrice = shirtPrice + showsPrice + goglesPrice;
  return totalPrice + " Taka";
}
console.log(shirtTaka(1, 0, 2));
console.log(shirtTaka(1, 2, 2));
