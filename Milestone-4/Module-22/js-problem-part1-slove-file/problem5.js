/**
 * ### Task-5: 
Generate a random number between 10 to 20.
 */

function randomNumber(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return "random number between 10 to 20 is::: " + random;
}
let min = 10;
let max = 20;
console.log(randomNumber(min, max));
