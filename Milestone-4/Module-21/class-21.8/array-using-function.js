// function arraySum(numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// const num = [10, 25, 80, 7, 50, 41, 35];
// let result = arraySum(num);
// console.log(result);

function arrayMult(numbers) {
  let mult = 1;
  for (let number of numbers) {
    mult *= number;
  }
  return mult;
}

const num = [1, 2, 3, 5, 4];
let result = arrayMult(num);
console.log(result);
