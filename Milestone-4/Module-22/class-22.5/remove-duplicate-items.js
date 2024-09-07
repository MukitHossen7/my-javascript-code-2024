//Step 1:

// function removeDuplicateArray(array) {
//   const newArray = [];
//   for (let arr of array) {
//     if (newArray.includes(arr) === false) {
//       newArray.push(arr);
//     }
//   }
//   return newArray;
// }
// const birianyKhor = [
//   "abul",
//   "mukit",
//   "sifat",
//   "jasim",
//   "abul",
//   "mukit",
//   "sifat",
//   "toma",
// ];
// let unickArray = removeDuplicateArray(birianyKhor);
// console.log(unickArray);

//Step: 2

function removeDuplicateArray(array) {
  const newArray = [];
  for (let arr of array) {
    if (newArray.includes(arr) !== true) {
      newArray.push(arr);
    }
  }
  return newArray;
}
// const birianyKhor = [
//   "abul",
//   "mukit",
//   "sifat",
//   "jasim",
//   "abul",
//   "mukit",
//   "sifat",
//   "toma",
// ];
const numArray = [2, 3, 5, 7, 9, 5, 2, 3, 10];
let unickArray = removeDuplicateArray(numArray);
console.log(unickArray);
