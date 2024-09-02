//Task 3

const squareNumber = [];
for (let i = 2; i <= 100; i++) {
  if (Number.isInteger(Math.sqrt(i))) {
    console.log(`First square number is: ${i}`);
    squareNumber.push(i);
  }
  if (squareNumber.length >= 5) {
    break;
  }
}
