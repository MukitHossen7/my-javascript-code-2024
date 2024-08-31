//Task - 4

const numbers = [25, 40, 50, 100];
const myName = "hey jan how are you";
let isArrayNumbers = Array.isArray(numbers);
let isArrayMyName = Array.isArray(myName);
if (isArrayNumbers && isArrayMyName) {
  console.log("Each variable is an array");
} else {
  console.log("Each variable is not an array");
}
