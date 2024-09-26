const squareNum = (squarearr) => {
  const newSquareArray = [];
  let sum = 0;
  for (let square of squarearr) {
    let squareValue = square ** 2;
    newSquareArray.push(squareValue);
  }
  for (let sumSquareNum of newSquareArray) {
    sum += sumSquareNum;
  }
  let count = newSquareArray.length;
  let average = sum / count;
  return average;
};
console.log(squareNum([2, 3, 4, 5, 6]));
console.log(squareNum([1, 2, 5, 10, 4, 7]));
