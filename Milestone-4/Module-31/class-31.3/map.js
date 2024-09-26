// const numbers = [65, 44, 12, 4];

// function sortNum(numbers) {
//   return numbers * 5;
// }
// const newArr = numbers.map(sortNum);
// console.log(newArr);

//Task 1
// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map((num) => num * 5);
// console.log(newArr);

//Task 2
// const numbers2 = [4, 6, 2, 8, 10];
// const dobleArray = numbers2.map((num) => num * 2);
// console.log(dobleArray);

//Task 3
const numbers3 = [10, 5, 8, 15, 30, 20];
const addFive = numbers3.map((num) => num + 5);
console.log(addFive);

//Task 4
// const numbers4 = [10, 80, 50, 55, 57, 17, 20];
// const divided = numbers4.map((num) => num / 2);
// console.log(divided);

//Task 5
// const numbers5 = [10, 80, 50, 55, 57, 17, 20];
// const remainder = numbers5.map((num) => {
//   if (num % 2 === 0) {
//     return num;
//   }
// });
// console.log(remainder);

//Task 6
const friendsName = ["tom", "tim", "mukit", "raju", "joy", "Jhanker"];
const nameLength = friendsName.map((name) => name.length);
console.log(nameLength);
