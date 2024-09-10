function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let totalPayment = 0;
  for (let payment of arr) {
    if (payment >= 3000) {
      let tex = payment * 0.2;
      totalPayment += payment - tex;
    } else {
      totalPayment += payment;
    }
  }
  let savings = totalPayment - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
console.log(monthlySavings({ name: "mukit", price: 20 }, 100));
