//Task - 6
let ticketPrice = 800;

let age = 5;
let isStudent = false;
if (age < 10) {
  console.log("your ticket free");
} else if (isStudent) {
  let discount = (ticketPrice * 50) / 100;
  let discountBill = ticketPrice - discount;
  console.log(discountBill);
} else if (age >= 60) {
  let discount = (ticketPrice * 15) / 100;
  let discountBill = ticketPrice - discount;
  console.log(discountBill);
} else {
  console.log("Regular ticket fare 800 tk");
}
