/*
### Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(numbers) {
  let size = numbers.length;
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  let averageValues = sum / size;
  return "The average values " + averageValues.toFixed(2);
}
const integersNums = [2, 8, 7, 9, 5, 3];
let result = make_avg(integersNums);
console.log(result);
