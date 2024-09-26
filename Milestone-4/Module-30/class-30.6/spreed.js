// const max = Math.max(10, 5, 80, 20, 25, 36);
// console.log(max);

// const numbers = [10, 5, 80, 20, 25, 36];
// const maxNum = Math.max(...numbers);
// console.log(maxNum);

// const numbers = [10, 5, 80, 20, 25, 36];
// const num = [...numbers];
// num.push(100);
// console.log(num);
// console.log(numbers);

// Example 1
// const originalArray = [1, 2, 3];
// originalArray.push(50);
// console.log(originalArray);
// const copiedArray = [...originalArray, 50, 100];
// copiedArray.push(100);
// copiedArray.pop();
// copiedArray.pop();
// console.log(copiedArray);

//Example 2

// const originalArray = [10, 20, 30];
// console.log(originalArray);
// const copiedArray = [...originalArray, 100, 200];
// copiedArray.push(100, 50);
// console.log(copiedArray);

//Example 3
// const array1 = [10, 20, 30];
// const array2 = [1, 2, 3];

// const newArray = [...array1, ...array2];
// console.log(newArray);

// const obj1 = {
//   name: "Mukit Hossen",
//   age: 25,
// };
// const obj2 = {
//   nationlity: "Banladeshi",
//   isSingle: true,
// };
// const newObj = { ...obj1, ...obj2 };
// console.log(newObj);

//Example 4
const originalArray = [1, 2, 3, 4, 5];
console.log(originalArray);
const copiedArray = [...originalArray.slice(0, 2), ...originalArray.slice(3)];
console.log(copiedArray);
