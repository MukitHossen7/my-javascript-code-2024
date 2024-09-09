//Problem: 1

// function addFunction(num1, num2) {
//   if (typeof num1 !== "number" || typeof num2 !== "number") {
//     return "Please enter number";
//   }

//   return num1 + num2;
// }
// console.log(addFunction(20, 10));

// // problem 2

// function stringConcat(name1, name2) {
//   if (typeof name1 !== "string" || typeof name2 !== "string") {
//     return "Please enter text value";
//   }
//   return name1 + " " + name2;
// }
// console.log(stringConcat("mukit", "hossen"));
// console.log(stringConcat(10, 20));

//problem 4:
// function objectFunction(products) {
//   if (typeof products !== "object") {
//     return "Please enter object value";
//   }
//   return products.price;
// }
// // const products = { name: "apple", price: 200 };
// const products = "mukit";
// console.log(objectFunction(products));

//Problem 5:

function arrayFunction(arr) {
  if (!Array.isArray(arr)) {
    return "Please enter array type value";
  }
  return arr[2];
}
const number = [25, 85, 100];
const products = { name: "apple", price: 200 };
console.log(arrayFunction(number));
console.log(arrayFunction(products));
