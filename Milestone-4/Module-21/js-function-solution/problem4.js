/*
### Task-4  
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

function count_zero(numbers) {
  let newString = [];
  for (let number of numbers) {
    if (number === "0") {
      newString.push(number);
    }
  }

  return "0 total count length: " + newString.length;
}

let binaryString = "10101010101010";
let result = count_zero(binaryString);
console.log(result);
