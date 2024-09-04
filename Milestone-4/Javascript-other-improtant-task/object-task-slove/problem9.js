/*
9. Problem: Object to Array of Values
Objective: Convert an object’s values into an array using Object.values() and display the array.
*/

const persons = {
  name: "Jone",
  age: 23,
  city: "Joypurhat",
  hobby: "Programming",
  isMarried: false,
};

const valuesArray = Object.values(persons);
console.log(valuesArray);
