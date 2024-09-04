/*
4. Problem: Loop Through Object Properties
Objective: Given an object with multiple key-value pairs, loop through the object using for...in and print both the keys and values.
*/
const cars = {
  name: "Fiat",
  model: 500,
  weight: "1000kg",
  color: "black",
  realizeYear: 2023,
};

for (let car in cars) {
  console.log(`${car} : ${cars[car]}`);
}
