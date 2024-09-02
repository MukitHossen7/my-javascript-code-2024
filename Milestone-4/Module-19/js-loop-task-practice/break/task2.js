//Task 2

// let num = 1;
// let sum = 0;
// while (true) {
//   sum += num;
//   if (sum >= 100) {
//     break;
//   }
//   console.log(num);
//   num++;
// }
// console.log("Sum: " + sum);

let num = 1;
let sum = 0;
while (num <= 50) {
  sum += num;
  if (sum >= 100) {
    break;
  }
  console.log(num);
  num++;
}

console.log("Sum: " + sum);
