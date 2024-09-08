//Task 1
// function totalCoustProducts(products) {
//   let total = 0;
//   for (let product of products) {
//     total += product.price;
//   }
//   return "Total cost of products " + total + " taka";
// }

// const products = [
//   { name: "sampu", price: 100 },
//   { name: "saban", price: 150 },
//   { name: "chiruni", price: 50 },
//   { name: "losan", price: 500 },
//   { name: "lipstick", price: 200 },
// ];
// console.log(totalCoustProducts(products));

//Task 2

function totalCostProducts(products) {
  let totalCost = 0;
  for (let product of products) {
    totalCost = totalCost + product.price * product.quantity;
  }
  return "Total Cost of Products " + totalCost + " taka";
}
const products = [
  { name: "sampu", price: 100, quantity: 2 },
  { name: "saban", price: 150, quantity: 3 },
  { name: "chiruni", price: 50, quantity: 1 },
  { name: "losan", price: 500, quantity: 5 },
  { name: "lipstick", price: 200, quantity: 7 },
];
console.log(totalCostProducts(products));
