/*
 8. Problem: Object to Array of Keys
Objective: Convert an object’s keys into an array using Object.keys() and display the array.
 */

const persons = {
  name: "Jone",
  age: 23,
  city: "Joypurhat",
  hobby: "Programming",
  isMarried: false,
};
const convertArray = Object.keys(persons);
console.log(convertArray);
