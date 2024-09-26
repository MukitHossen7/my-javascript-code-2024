// Task 1
const names = (array) => {
  const newArray = [];
  for (let arr of array) {
    if (arr.length % 2 === 0) {
      newArray.push(arr.length);
    }
  }
  return newArray;
};

console.log(
  names(["Mukit", "Raju", "Ranju", "Toma", "joy", "komala", "jhankerm"])
);
