//Task - 6

let age = 30;
let ticketPrice = 800;
let isStudent = false;
if (age < 10) {
  console.log("your ticket free");
} else if (isStudent === true || (age > 10 && age < 28)) {
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
