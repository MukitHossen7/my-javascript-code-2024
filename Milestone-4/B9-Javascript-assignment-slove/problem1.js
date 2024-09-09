/*
1.টিকেট সেল করার সংখ্যা ইনপুট dita hoba
2
*/

function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  }
  let perTicketPrice = 120;
  let securityExpense = 500;
  let lanceCost = 50 * 8;

  let income = perTicketPrice * ticketSale;
  let expense = securityExpense + lanceCost;
  let totalTaka = income - expense;
  return totalTaka;
}
//Test

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
