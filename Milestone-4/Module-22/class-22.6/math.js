// console.log(Math.max(10, 20, 14, 100, 15, 35, 40));
// console.log(Math.min(10, 20, 14, 100, 15, -10, 35, 40));
// console.log(Math.PI);
// console.log(-52);
// console.log(Math.abs(-52));
// console.log(Math.abs(-52.25));
// console.log(Math.round(52.25));
// console.log(Math.round(52.45));
// console.log(Math.round(52.55));
// console.log(Math.round(52.8));

// console.log(Math.floor(52.81));
// console.log(Math.floor(52.0001));
// console.log(Math.floor(52.99));

// console.log(Math.ceil(52.99));
// console.log(Math.ceil(52.51));
// console.log(Math.ceil(52.41));
// console.log(Math.ceil(52.001));

// Math random
// console.log(Math.random());
// let random = Math.random() * 10 + 1;
// console.log(Math.floor(random));

// function randomValue(min, max) {
//   return Math.floor(Math.random() * (max - min) + 1) + min;
// }
// console.log(randomValue(1, 10));

//Lodo random
function lodo(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}
console.log(lodo(1, 6));
