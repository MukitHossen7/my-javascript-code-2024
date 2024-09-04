const numbers = [10, 15, 20, 5, 30];
console.log(numbers);

// let reverseNumber = numbers.reverse();
// console.log(reverseNumber);

// let numbersLength = numbers.length - 1;
// for (let i = numbersLength; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// let reverseArray = [];
// for (let number of numbers) {
//   reverseArray.unshift(number);
// }
// console.log(reverseArray);

let reverseArray = [];
for (let i = 0; i < numbers.length; i++) {
  reverseArray.unshift(numbers[i]);
}
console.log(reverseArray);
