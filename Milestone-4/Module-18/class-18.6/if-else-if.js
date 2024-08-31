//Multi Level conition

/*
const price = 15000;
if (price >= 10000) {
  // 50% discount
  const discount = (price * 50) / 100;
  const payBill = price - discount;
  console.log(payBill);
} else if (price < 10000 && price >= 5000) {
  // 25% discount
  const discount = (price * 25) / 100;
  const payBill = price - discount;
  console.log(payBill);
} else if (price < 5000 && price >= 3000) {
  // 10% discount
  const discount = (price * 10) / 100;
  const payBill = price - discount;
  console.log(payBill);
} else {
  console.log("You will pay " + price);
}
  */

let age = 70;
let price = 1000;
if (age <= 12) {
  console.log("you will eat free");
} else if (age > 12 && age <= 30) {
  console.log("you get full taka");
} else if (age >= 50) {
  //  50% discount
  let discount = (price * 50) / 100;
  let payAmount = price - discount;
  console.log(payAmount);
} else if (age > 30 && age < 50) {
  //    10% discount
  let discount = (price * 10) / 100;
  let payAmount = price - discount;
  console.log(payAmount);
}
