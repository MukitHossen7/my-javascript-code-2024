//Average the Odd numbers

// function oddAverage(numbersArray) {
//   let addSum = 0;
//   let oddArray = [];
//   for (let number of numbersArray) {
//     if (number % 2 === 1) {
//       console.log(number);
//       addSum += number;
//       oddArray.push(number);
//     }
//   }
//   let oddLength = oddArray.length;
//   let oddAverage = addSum / oddLength;
//   return "Average of the odd " + oddAverage;
// }

// // const num = [10, 9, 7, 8, 5, 11, 12, 15];
// const num = [17, 20, 22, 25, 23, 30, 27];
// let result = oddAverage(num);
// console.log(result);

//Average the Even numbers

function evenAverage(numbersArray) {
  let evenSum = 0;
  const evenArray = [];
  for (let number of numbersArray) {
    if (number % 2 === 0) {
      evenSum += number;
      evenArray.push(number);
    }
  }
  let evenLength = evenArray.length;
  let even_average = evenSum / evenLength;
  return "The average of the even numbers " + even_average;
}

// const numArray = [10, 15, 12, 17, 20, 22, 21];
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = evenAverage(numArray);
console.log(result);
