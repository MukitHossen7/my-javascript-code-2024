/*
6. Problem: Merge Two Objects
Objective: Given two objects, merge them into one new object and display the result.
*/

let person1 = {
  firstName1: "John",
  lastName1: "Doe",
  age: 50,
  eyeColor: "blue",
};
const person2 = { firstName: "Anne", lastName: "Smith" };

let person = {
  ...person1,
  ...person2,
};
console.log(person);

console.log(Object.assign(person1, person2));
