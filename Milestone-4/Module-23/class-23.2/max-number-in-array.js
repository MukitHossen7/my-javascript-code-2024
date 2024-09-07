// function maxNumber(number) {
//   let max = number[0];
//   for (let arr of number) {
//     if (arr > max) {
//       max = arr;
//     }
//   }
//   return max;
// }
// const numbers = [10, 52, 15, 100, 63, 70, 5];
// console.log(maxNumber(numbers));

function minNumber(numbers) {
  let min = numbers[0];
  for (let number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}
const numbersArray = [52, 15, 100, 63, 70, 5];
console.log(minNumber(numbersArray));
