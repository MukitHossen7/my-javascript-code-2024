/*

### Task-2: 
You are given an array of numbers. Count how many times the a number is repeated in the array. 

sample-input: 
numbers = [5,6,11,12,98, 5]

find: 5

output: 2

<br/>

sample-input: 

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/

function repeatedNumber(array, find) {
  let count = 0;
  for (let arr of array) {
    if (arr === find) {
      count++;
    }
  }
  return count;
}

const numbers = [5, 6, 11, 12, 98, 5, 10, 5];
let findNumber = 5;
let result = repeatedNumber(numbers, findNumber);
console.log(result);
