/*
### Task -1: 
Find the lowest number in the array below.
<br>
`const heights2 = [167, 190, 120, 165, 137];`
*/

function lowestNumber(numbers) {
  let min = numbers[0];
  for (let number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return "Lowest number is: " + min;
}
const heights2 = [167, 190, 120, 165, 137];
console.log(lowestNumber(heights2));
