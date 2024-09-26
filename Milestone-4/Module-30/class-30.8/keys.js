// const person = {
//   name: "Mukit Hossen",
//   age: 25,
//   nationality: "Bangladesh",
//   isMaried: false,
// };
// console.log(person);
// const keys = Object.keys(person);
// console.log(keys);
// const value = Object.values(person);
// console.log(value);

// const entries = Object.entries(person);
// console.log(entries);
// delete person.isMaried;
// console.log(person);

const person = {
  name: "Mukit Hossen",
  age: 25,
  nationality: "Bangladesh",
  isMaried: false,
};
console.log(person);

// const { isMaried, ...newPerson } = person;
// console.log(newPerson);

const { age, ...newPerson } = person;
console.log(newPerson);
