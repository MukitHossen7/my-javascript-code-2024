// step:1
// function getEvenNumbers(numbers) {
//   for (let number of numbers) {
//     if (number % 2 === 0) {
//       console.log("The even number is " + number);
//     }
//   }
// }

// const numArray = [10, 15, 21, 25, 30, 25, 40];
// let result = getEvenNumbers(numArray);
// // console.log(result);

//step:2
// function getEvenNumbers(numbers) {
//   let evenArray = [];
//   for (let number of numbers) {
//     if (number % 2 === 0) {
//       evenArray.push(number);
//     }
//   }
//   return evenArray;
// }

// const numArray = [10, 15, 21, 25, 30, 25, 40];
// let result = getEvenNumbers(numArray);
// console.log(result);

//step: 3

// function getEvenNumbers(numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     if (number % 2 === 0) {
//       console.log(number);
//       sum += number;
//     }
//   }
//   return sum;
// }

// // const numArray = [10, 15, 21, 25, 30, 25, 40];
// const numArray = [2, 1, 5, 7, 8, 9, 4];
// let result = getEvenNumbers(numArray);
// console.log(result);

//Step: 4

function getOddNumbers(numbers) {
  let sum = 0;
  for (let number of numbers) {
    if (number % 2 === 1) {
      console.log("Odd numbers is " + number);
      sum += number;
    }
  }
  return sum;
}

// const numArray = [10, 15, 21, 25, 30, 25, 40];
const numArray = [2, 1, 5, 7, 8, 9, 4];
let result = getOddNumbers(numArray);
console.log(result);
