// ### Task 2

const numbers = [12, 98, 5, 41, 23, 78, 46];
console.log(numbers);
const evenNumbers = [];
for (let number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}
console.log(evenNumbers);
