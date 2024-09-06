// function dobbleFunction(number, isDobble) {
//   if (isDobble) {
//     return number * 2;
//   } else {
//     return number * 3;
//   }
// }

// let number = 20;
// let isDobble = false;
// console.log(dobbleFunction(number, isDobble));

// function product(price1, price2) {
//   return price1 + price2;
// }
// let shirt = 500;
// let watch = 200;
// console.log(product(shirt, watch));

function isEvenString(str) {
  let size = str.length;
  if (size % 2 === 0) {
    return "even size " + size;
  } else {
    return "odd size " + size;
  }
}
console.log(isEvenString("Bangladesh"));
console.log(isEvenString("Dhaka"));
console.log(isEvenString("Faka"));

// function myArray(arrays) {
//   for (let array of arrays) {
//     if (array % 2 === 0) {
//       console.log("even number is ", array);
//     } else {
//       console.log("odd number is ", array);
//     }
//   }
// }
// myArray([45, 21, 5, 6, 80, 10, 30]);
// myArray([1, 3, 5, 7, 9, 10, 11]);

// function getAge(person) {
//   let age = person.age;
//   return age;
// }
// const person = {
//   name: "mukit",
//   age: 24,
//   city: "Joypurhat",
// };
// console.log(getAge(person));
