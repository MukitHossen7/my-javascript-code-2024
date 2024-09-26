// Task 1
const num1 = [5, 8, 4, 100];
const num2 = [15, 6, 7, 20];
const twoArray = (arr1, arr2) => {
  const newArray = [...arr1, ...arr2];
  const maxNum = Math.max(...newArray);
  return maxNum;
};
console.log(twoArray(num1, num2));
