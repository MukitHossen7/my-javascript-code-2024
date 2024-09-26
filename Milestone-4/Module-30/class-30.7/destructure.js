// Object Destructure

// const person = {
//   name: "sunny",
//   age: 35,
//   number: "01789229571",
//   nationality: "Bangladesh",
// };

// const { name, number, age } = {
//   name: "sunny",
//   age: 35,
//   number: "01789229571",
//   nationality: "Bangladesh",
// };
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(number, age);
// console.log(number, age);
// console.log(number, age);

//Array Destructure

// const [fist, , , , last] = [10, 50, 40, 26, 80];
// console.log(fist, last);

const [fist, second] = [10, 50, 40, 26, 80];
console.log(fist, second);

const [fName, sName] = ["joy", "roy", "toy", "moy", "koy"];
console.log(fName, sName);

function dobleThem(num1, num2) {
  return [num1 * 2, num2 * 2];
}
const [prothom] = dobleThem(5, 6);
console.log(prothom);
